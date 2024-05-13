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
const GET_AUTHOR = gql`
query gerAuthor($slug: String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    email
    id
    name
    description
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
const GET_POST = gql`
query getPost($slug: String!) {
  post(where: {slug: $slug}) {
    author {
      avatar {
        url
      }
      name
      slug
    }
    cover {
      url
    }
    description {
      text
    }
    title
  }
}
`
export {GET_POSTS , GET_POST , GET_AUTHORS , GET_AUTHOR}
