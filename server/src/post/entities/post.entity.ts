import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  creationDate: Date;
}
