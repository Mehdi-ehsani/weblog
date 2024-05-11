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
    slug
    avatar {
      url
    }
  }
}
`;
const GEY_AUTHOR = gql`
query gerAuthor($slug: String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    email
    id
    name
    posts {
      cover {
        url
      }
      description {
        text
      }
      slug
      title
      id
    }
  }
}
`
export {GET_POSTS , GET_AUTHORS , GEY_AUTHOR}
