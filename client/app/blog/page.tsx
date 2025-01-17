import { query } from '@/lib/apollo/ApolloClient';
import { GET_POST_LIST } from '@/lib/apollo/queries';
import { Post } from '@/types/post';
import Link from 'next/link';

export default async function Page() {
  const { data, loading, error } = await query<{ posts: Post[] }>({
    query: GET_POST_LIST,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.posts.map((el) => (
          <li key={el.id}>
            <Link href={`/blog/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
