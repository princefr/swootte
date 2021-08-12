import { ApolloClient, InMemoryCache} from '@apollo/client';

// const link = process.browser ? split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === 'OperationDefinition' && operation === 'subscription';
//   },
//   wsLink,
//   httplink,
// ): httplink;

// graphql client
const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    cache: new InMemoryCache()
});


export default client;