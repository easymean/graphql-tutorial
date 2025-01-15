import { InputType, Field } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @Length(10, 255)
  content: string;

  @Field(() => [String])
  tags: string[];
}
