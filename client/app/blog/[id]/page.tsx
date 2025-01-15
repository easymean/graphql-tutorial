import { getPostQuery } from '@/app/lib/actions';

type Props = {
  id: string;
};

export default async function Page({ params }: { params: Promise<Props> }) {
  const { id } = await params;
  const { data } = await getPostQuery(id);
  return (
    <div>
      <p>{data.post.title}</p>
    </div>
  );
}
