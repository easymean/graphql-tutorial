import { ApolloWrapper } from '@/lib/apllo/ApolloWrapper';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloWrapper>
      <section>{children}</section>
    </ApolloWrapper>
  );
}
