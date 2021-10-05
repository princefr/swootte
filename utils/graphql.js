import { ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from "apollo-link-context";
import FirebaseClient from './firebase';
import firebase from 'firebase/app';
import 'firebase/auth'

// https://github.com/apollographql/subscriptions-transport-ws/issues/333#issuecomment-359261024
FirebaseClient()
const token = await firebase.auth().onIdTokenChanged((user) => user.getIdToken(true))
const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    headers: {authorization: `Bearer ${token}`}
  });
  
  const wsLink = process.browser ? new WebSocketLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_WSS_URL,
    options: {
      reconnect: true
    }
  }) : null;





      // The split function takes three parameters:
  //
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
  ): httpLink;

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
  });


 
 export default client

  


 


