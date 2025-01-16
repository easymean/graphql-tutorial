import { GET_POST } from '@/lib/queries';
import { getClient } from '@/lib/urql/UrqlClient';
import { Post } from '@/types/post';

type Props = {
  id: string;
};

export default async function Page({ params }: { params: Promise<Props> }) {
  const { id } = await params;

  const { data } = await getClient().query<{ post: Post }, { id: string }>(
    GET_POST,
    { id }
  );

  const { post } = data!;

  return (
    <div>
      <h1>Post</h1>
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
