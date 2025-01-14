import { getPostQuery } from '@/app/lib/queries';

export default async function Page() {
  const { data, loading, error } = await getPostQuery('1');

  return <ul></ul>;
}
