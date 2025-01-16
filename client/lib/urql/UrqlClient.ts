import { registerUrql } from '@urql/next/rsc';
import { cacheExchange, createClient, fetchExchange } from 'urql';

const makeClient = () => {
  return createClient({
    url: process.env.BASE_URL || 'http://localhost:3001/graphql',
    exchanges: [cacheExchange, fetchExchange],
  });
};

export const { getClient } = registerUrql(makeClient);
