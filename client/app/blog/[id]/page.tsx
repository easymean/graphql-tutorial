import { query } from '@/lib/apollo/ApolloClient';
import { GET_POST } from '@/lib/apollo/queries';
import { Post } from '@/types/post';

type Props = {
  id: string;
};

export default async function Page({ params }: { params: Promise<Props> }) {
  const { id } = await params;
  const { data, loading, error } = await query<{ post: Post }, { id: string }>({
    query: GET_POST,
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message}</p>;

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
