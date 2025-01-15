import { getClient, query } from '@/app/lib/apllo/ApolloClient';
import {
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POST_LIST,
  UPDATE_POST,
} from '@/app/lib/queries';
import { Post } from '@/app/lib/types';
import { ApolloQueryResult, FetchResult } from '@apollo/client';

interface IPostProps {
  title: string;
  content: string;
}

interface IPostQueryProps extends IPostProps {}

interface IPostMutateProps extends IPostProps {}

export const getPostListQuery = async (): Promise<
  ApolloQueryResult<{ posts: Post[] }>
> => {
  return await query<{ posts: Post[] }>({ query: GET_POST_LIST });
};

export const getPostQuery = async (
  id: string
): Promise<ApolloQueryResult<{ post: Post }>> => {
  return await query<{ post: Post }>({
    query: GET_POST,
    variables: {
      id,
    },
  });
};

export const createPostQuery = async ({
  title,
  content,
}: IPostMutateProps): Promise<FetchResult<{ addPost: Post }>> => {
  return await getClient().mutate<{ addPost: Post }>({
    mutation: CREATE_POST,
    variables: {
      post: {
        title,
        content,
      },
    },
  });
};

export const updatePostQuery = async (
  id: string,
  { title, content }: IPostMutateProps
) => {
  return await getClient().mutate<{ updatePost: Post }>({
    mutation: UPDATE_POST,
    variables: {
      id,
      post: {
        title,
        content,
      },
    },
  });
};

export const deletePostQuery = async (id: string) => {
  return await getClient().mutate({
    mutation: DELETE_POST,
    variables: {
      id,
    },
  });
};
