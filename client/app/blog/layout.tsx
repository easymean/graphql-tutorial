import { ApolloWrapper } from '@/lib/apollo/ApolloWrapper';

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
