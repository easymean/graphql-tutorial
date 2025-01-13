import { GET_POST_LIST } from '@/app/lib/queries';
import { query } from '@/app/lib/apollo';

export default async function Page() {
  const { data } = await query({ query: GET_POST_LIST() });
  return <ul></ul>;
}
