import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post } from 'src/post/entities/post.entity';

@Injectable()
export class PostService {
  async create(createPostInput: CreatePostInput): Promise<Post> {
    console.log(`This action adds a new post: ${createPostInput}`);
    return {} as any;
  }

  async findAll(): Promise<Post[]> {
    console.log(`This action returns all post`);
    return [] as Post[];
  }

  async findOne(id: string): Promise<Post> {
    console.log(`This action returns a #${id} post`);
    return {} as any;
  }

  async update(id: string, updatePostInput: UpdatePostInput): Promise<Post> {
    console.log(`This action updates a #${id} post`);
    return {} as any;
  }

  async remove(id: string): Promise<Boolean> {
    console.log(`This action removes a #${id} post`);
    return true;
  }
}
