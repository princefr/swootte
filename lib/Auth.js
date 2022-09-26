import React, { useState, useContext, createContext, useEffect, useMemo } from 'react'
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
  createHttpLink,
} from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import WebSocket from 'ws'

import { getAuth } from 'firebase/auth';

const authContext = createContext()


export const AuthProvider = ({ children }) => {
  
  const auth = useProvideAuth()
  const [initied, setInitied] = useState(false)

  useEffect(() => {
    getAuth().onAuthStateChanged((_user) => setInitied(true))
  })

  if(!initied) return null

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
    const token = await user?.getIdToken(true)

    setAuthToken(token)
  }

  useEffect(() => {
    getAuth().onIdTokenChanged((user) => handleToken(user))
  }, [])


  const authLink = setContext(async(_, { headers }) => {
    return {
      headers: {
        ...headers,
        mode: "no-cors",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Credentials": true,
        Authorization: `Bearer ${authToken}`,
      }
  
    }
});

  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL
  });

  

  const wsLink = typeof window === 'undefined' ? new GraphQLWsLink(
    createClient({
      webSocketImpl: WebSocket,
      url: process.env.NEXT_PUBLIC_GRAPHQL_WSS_URL,
      connectionParams: {
        Authorization: `Bearer ${authToken}`
      }
    })
  ): null;

  // The split function takes three parameters:
  // * A function that's called for each operation to execute
  // * The Link to use for an operation if the function returns a "truthy" value
  // * The Link to use for an operation if the function returns a "falsy" value
  const splitLink = typeof window === 'undefined' ? split(
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
      link: authLink.concat(splitLink),
      queryDeduplication: false,
      name: "react-web-client",
      ssrMode: false,
      cache: new InMemoryCache(),
      defaultOptions: {
        query: {
          errorPolicy: 'all',
          fetchPolicy: 'network-only'
        },
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





export const useSSrClientApollo = (authToken) => {
  return new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
    
      }),
      cache: new InMemoryCache(),
    });

    
}