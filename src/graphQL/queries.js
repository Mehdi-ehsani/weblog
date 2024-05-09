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
export {GET_POSTS}
