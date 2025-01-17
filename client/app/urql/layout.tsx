import UrqlWrapper from '@/lib/urql/UrqlWrapper';

export default function UrqlLayout({
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
