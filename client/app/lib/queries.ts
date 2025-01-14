import { gql } from "@apollo/client";
import { query } from "@/app/lib/apollo";

interface IPostProps {
  title: string;
  content: string;
}

interface IPostQueryProps extends IPostProps {}

interface IPostMutateProps extends IPostProps {}

export const getPostListQuery = async () => {
  const useQuery = gql`
    {
      posts {
        title
        content
      }
    }
  `;

  return await query({ query: useQuery });
};

export const getPostQuery = async (id: string) => {
  const useQuery = gql`
    query GetPost($id: ID!) {
      post(id: $id) {
        title
      }
    }
  `;

  return await query({
    query: useQuery,
    variables: {
      id,
    },
  });
};

export const createPostQuery = async ({ title, content }: IPostMutateProps) => {
  const useQuery = gql`
    mutation CreatePost($post: PostInput!) {
      addPost(newPostData: $post) {
        title
        content
      }
    }
  `;
  return await query({
    query: useQuery,
    variables: {
      post: {
        title,
        content,
      },
    },
  });
};

export const updatePostQuery = (id: string) => {
  return gql`mutation UpdatePost($id: ID!, $post: PostInput!){
        
    }`;
};

export const deletePostQuery = (id: string) => {
  return gql`mutation {
        
    }`;
};
