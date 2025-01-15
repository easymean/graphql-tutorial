import { gql } from '@apollo/client';

export const GET_POST_LIST = gql`
  {
    posts {
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
  mutation CreatePost($post: PostInput!) {
    addPost(newPostData: $post) {
      title
      content
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $post: PostInput!) {
    updatePost(id: $id, update: $post) {
      title
      content
    }
  }
`;

export const DELETE_POST = '';
