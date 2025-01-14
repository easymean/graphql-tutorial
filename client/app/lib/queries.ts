import { gql } from '@apollo/client';
import { query } from '@/app/lib/apollo';

interface IPostProps {}

interface IPostQueryProps extends IPostProps {}

interface IPostMutateProps extends IPostProps {}

export const GET_POST_LIST = () => {
  return gql`query {}`;
};

export const getPostQuery = async (id: string) => {
  const useQuery = gql`
    query getPost($id: id) {
      book(id: $id) {
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

export const UPDATE_POST = (id: string) => {
  return gql`mutation {
        
    }`;
};

export const DELETE_POST = (id: string) => {
  return gql`mutation {
        
    }`;
};

export const CREATE_POST = () => {
  return gql`mutation {

  }`;
};
