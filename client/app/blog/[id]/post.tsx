// client component에서 graphql 사용 예시입니다.

'use client';

import { GET_POST } from '@/lib/apollo/queries';
import { Post } from '@/types/post';
import { useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';

export default function PostDetail() {
  const { id } = useParams() as { id: string };
  const { data, loading, error } = useQuery<
    {
      post: Post;
    },
    { id: string }
  >(GET_POST, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message}</p>;

  const { post } = data!;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
