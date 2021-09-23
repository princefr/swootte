
import { ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import firebase from 'firebase/app';
import 'firebase/auth'
import initAuth from '../../utils/initAuth';




initAuth()
export function useClient(token) {
const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    headers: {authorization: `Bearer ${token}`}
  });
  
  const wsLink = process.browser ? new WebSocketLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_WSS_URL,
    options: {
      reconnect: true,
      connectionParams: async () => {
        return {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      }
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

  return new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
  });

 

}


