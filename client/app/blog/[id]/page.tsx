import { getPostQuery } from '@/app/lib/actions';

type Props = {
  id: string;
};

export default async function Page({ id }: Props) {
  const { data, loading, error } = await getPostQuery(id);

  return <div>{data}</div>;
}
