import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from 'src/post/entities/post.entity';
import { randomUUID } from 'crypto';

@Injectable()
export class PostService {
  posts: Post[] = [
    {
      id: 'hello',
      title: 'hello',
      content: 'good',
      creationDate: new Date(),
    },
  ];

  async create(createPostInput: CreatePostInput): Promise<Post> {
    console.log(`This action adds a new post`);

    const id = randomUUID();
    const newPost = {
      id,
      title: createPostInput.title,
      content: createPostInput.content,
      creationDate: new Date(),
    };

    this.posts.push(newPost);
    return newPost;
  }

  async findAll(): Promise<Post[]> {
    console.log(`This action returns all post`);
    return this.posts;
  }

  async findOne(id: string): Promise<Post> {
    console.log(`This action returns a #${id} post`);
    let idx = this.posts.findIndex((el) => el.id === id);
    if (idx < 0) idx = 0;
    return this.posts[idx];
  }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post> {
    console.log(`This action updates a #${id} post: ${updatePostInput}`);
    return {} as any;
  }

  async remove(id: string): Promise<Boolean> {
    console.log(`This action removes a #${id} post`);
    return true;
  }
}
