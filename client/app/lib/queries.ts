import { gql } from '@apollo/client';

interface IPostProps {}

interface IPostQueryProps extends IPostProps {}

interface IPostMutateProps extends IPostProps {}

export const GET_POST_LIST = () => {
  return gql`query {}`;
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
