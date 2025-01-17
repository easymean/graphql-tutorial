import { HttpLink } from '@apollo/client';
import {
  InMemoryCache,
  ApolloClient,
  registerApolloClient,
} from '@apollo/experimental-nextjs-app-support';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: process.env.BASE_URL,
    }),
  });
});
