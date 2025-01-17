import { GET_POST_LIST } from '@/lib/queries';
import { getClient } from '@/lib/urql/UrqlClient';
import { Post } from '@/types/post';
import Link from 'next/link';

export default async function Page() {
  const { data } = await getClient().query<{ posts: Post[] }>(
    GET_POST_LIST,
    {}
  );
  return (
    <div>
      <ul>
        {data &&
          data.posts.map((el) => (
            <li key={el.id}>
              <Link href={`/test/${el.id}`}>{el.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
