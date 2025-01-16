'use server';

import { createPostQuery } from '@/lib/actions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await createPostQuery({ title, content });

  revalidatePath(`/blog`);
  redirect('/blog');
}
