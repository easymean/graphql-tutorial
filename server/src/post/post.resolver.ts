import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts() {
    return await this.postService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id', { type: () => ID }) id: string) {
    return await this.postService.findOne(id);
  }

  @Mutation(() => Post)
  async addPost(@Args('createPostInput') createPostInput: CreatePostInput) {
    return await this.postService.create(createPostInput);
  }

  @Mutation(() => Post)
  async updatePost(
    @Args('id', { type: () => ID }) id: string,
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ) {
    return await this.postService.update(id, updatePostInput);
  }

  @Mutation(() => Boolean)
  async removePost(@Args('id', { type: () => ID }) id: string) {
    return await this.postService.remove(id);
  }
}
