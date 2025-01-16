export interface Post {
  id: string;
  title: string;
  content: string;
  creationDate: Date;
}

export type CreatePostInput = {
  post: {
    title: string;
    content: string;
  };
};
