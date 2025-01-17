import UrqlWrapper from '@/lib/urql/UrqlWrapper';

export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UrqlWrapper>
      <section>{children}</section>
    </UrqlWrapper>
  );
}
