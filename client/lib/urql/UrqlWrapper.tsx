'use client';

import {
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
  UrqlProvider,
} from '@urql/next';
import { useMemo } from 'react';

export default function UrqlWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined',
    });
    const client = createClient({
      url: process.env.NEXT_PUBLIC_BASE_URL || '',
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
