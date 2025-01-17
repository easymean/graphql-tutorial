// client component에서 graphql 사용 예시입니다.

'use client';

import { GET_POST } from '@/lib/queries';
import { Post } from '@/types/post';
import { useParams } from 'next/navigation';
import { useQuery } from 'urql';

export default function PostDetail() {
  const { id } = useParams() as { id: string };
  const [{ data, fetching, error }] = useQuery<
    {
      post: Post;
    },
    { id: string }
  >({ query: GET_POST, variables: { id } });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message}</p>;

  const { post } = data!;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
