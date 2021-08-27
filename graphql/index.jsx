import { onError } from "@apollo/client/link/error";
import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`Graphql error ${message}`);
      return null;
    });
  }
});
const link = from([
  errorLink,
  new HttpLink({ uri: "https://graphql-pokeapi.vercel.app/api/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default client;
