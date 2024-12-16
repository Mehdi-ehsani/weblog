import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
mutation MyMutation($description: String! , $email: String! , $date: String! , $name: String! , $slug: String!) {
  createComment(
    data: {description: $description, email: $email, date: $date, post: {connect: {slug: $slug}}, name: $name}
  ) {
    id
  }
}


`
export {CREATE_COMMENT}