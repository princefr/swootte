import React, { useState, useContext, createContext, useEffect, useMemo } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
} from '@apollo/client'
import firebase from 'firebase/app';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import 'firebase/auth'
const authContext = createContext()


export const AuthProvider = ({ children }) => {
  const auth = useProvideAuth()

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.client}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}


export const useProvideAuth = () => {
  const [authToken, setAuthToken] = useState("")
  

  const handleToken = async (user) => {
    const token = await user?.getIdToken()
    setAuthToken(token)
  }
  useEffect(() => {
    const unsub =  firebase.auth().onIdTokenChanged((user) => handleToken(user))
    return unsub();
  }, [])



  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    headers: {authorization: `Bearer ${authToken}`}
  });

  const wsLink = process.browser ? new WebSocketLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_WSS_URL,
    options: {
      reconnect: true
    }
  }) : null;

  // The split function takes three parameters:
  // * A function that's called for each operation to execute
  // * The Link to use for an operation if the function returns a "truthy" value
  // * The Link to use for an operation if the function returns a "falsy" value
  const splitLink = process.browser ? split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  ) : httpLink;

  const client = useMemo(function(){
    return new ApolloClient({
      link: splitLink,
      queryDeduplication: false,
      name: "react-web-client",
      ssrMode: true,
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery : {
          fetchPolicy: 'cache-and-network'
        }
      }
    })
  }, [authToken]);


  return {
    client,
  }
}