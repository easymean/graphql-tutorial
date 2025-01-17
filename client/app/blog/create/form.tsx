'use client';

import { CREATE_POST } from '@/lib/apollo/queries';
import { CreatePostInput, Post } from '@/types/post';
import { useMutation } from '@apollo/client';
import { redirect } from 'next/navigation';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export function Form() {
  const [createPost, { loading, error }] = useMutation<
    { addPost: Post },
    CreatePostInput
  >(CREATE_POST);

  const [input, setInput] = useState<{ title: string; content: string }>({
    title: '',
    content: '',
  });

  const saveData = async (input: { title: string; content: string }) => {
    const { data } = await createPost({
      variables: {
        post: {
          ...input,
        },
      },
    });

    redirect(`/blog/${data?.addPost.id}`);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const target = e.currentTarget;
    setInput({
      ...input,
      [target.id]: target.value,
    });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await saveData({ ...input });
  };

  if (loading) return <div>Saving...</div>;
  if (error) return <div>Save error! {error.message}</div>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>title</label>
          <input type='text' name='title' id='title' onChange={handleChange} />
        </div>
        <div>
          <label htmlFor='content'>content</label>
          <input
            type='text'
            name='content'
            id='content'
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}
