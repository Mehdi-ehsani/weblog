import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
mutation createComment($title: String! , $description: String! , $email: String! , $slug: String! , $date: String! ) {
  createComment(
    data: {title: $title, description: $description, email: $email, date: $date, clvuz6l94130y07uzediraaeo: {connect: {slug: $slug}}}
  ) {
    id
  }
}

`
export {CREATE_COMMENT}