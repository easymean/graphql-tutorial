import { query } from '@/lib/apollo/ApolloClient';
import { GET_POST_LIST } from '@/lib/apollo/queries';
import { Post } from '@/types/post';
import Link from 'next/link';

export default async function Page() {
  const { data } = await query<{ posts: Post[] }>({ query: GET_POST_LIST });
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
