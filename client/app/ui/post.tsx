export default async function Post({}) {
  const posts = await [];
  return (
    <ul>
      {posts.map((post) => (
        <li></li>
      ))}
    </ul>
  );
}
