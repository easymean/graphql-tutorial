import { InputType, Field } from '@nestjs/graphql';
import { Length, MaxLength } from 'class-validator';

@InputType()
export class CreatePostInput {
  @Field()
  @MaxLength(30)
  title: string;

  @Field()
  @MaxLength(255)
  content: string;
}
