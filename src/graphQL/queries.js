import { gql } from "@apollo/client";

const GET_POSTS = gql`
query {
  posts {
    author {
      name
      avatar {
        url
      }
    }
    cover {
      url
    }
    description {
      text
    }
    id
    slug
    title
  }
}
`;
const GET_AUTHORS = gql`
query {
  authors {
    id
    name
    avatar {
      url
    }
  }
}
`;
export {GET_POSTS , GET_AUTHORS}
