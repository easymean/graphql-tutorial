import { getPostListQuery } from '@/app/lib/actions';
import Link from 'next/link';

export default async function Page() {
  const { data } = await getPostListQuery();
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
