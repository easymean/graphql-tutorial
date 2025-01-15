import { createPost } from './actions';

export default function Page() {
  return (
    <form action={createPost}>
      <label>title</label>
      <input type="text" name="title" />
      <label>content</label>
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  );
}
