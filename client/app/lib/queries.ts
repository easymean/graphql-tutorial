import { gql } from '@apollo/client';

export const GET_POST_LIST = gql`
  {
    posts {
      id
      title
      content
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      title
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($post: CreatePostInput!) {
    addPost(createPostInput: $post) {
      id
      title
      content
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $post: PostInput!) {
    updatePost(id: $id, update: $post) {
      id
      title
      content
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
