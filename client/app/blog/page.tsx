import { getPostListQuery } from '@/app/lib/actions';

export default async function Page() {
  const { data } = await getPostListQuery();
  return (
    <div>
      <ul>
        {data.posts.map((el) => (
          <li key={el.id}>
            <p>{el.title}</p>
            <p>{el.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
