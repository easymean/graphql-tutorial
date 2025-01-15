import { query } from '@/app/lib/apollo';
import {
  CREATE_POST,
  DELETE_POST,
  GET_POST,
  GET_POST_LIST,
  UPDATE_POST,
} from '@/app/lib/queries';
import { Post } from '@/app/lib/types';
import { ApolloQueryResult } from '@apollo/client';

interface IPostProps {
  title: string;
  content: string;
}

interface IPostQueryProps extends IPostProps {}

interface IPostMutateProps extends IPostProps {}

interface PostListResponse {
  posts: Post[];
}

export const getPostListQuery = async (): Promise<
  ApolloQueryResult<PostListResponse>
> => {
  return await query<PostListResponse>({ query: GET_POST_LIST });
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

export const createPostQuery = async ({ title, content }: IPostMutateProps) => {
  return await query({
    query: CREATE_POST,
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
  return await query({
    query: UPDATE_POST,
    variables: {
      post: {
        title,
        content,
      },
    },
  });
};

export const deletePostQuery = async (id: string) => {
  return await query({
    query: DELETE_POST,
    variables: {
      id,
    },
  });
};
