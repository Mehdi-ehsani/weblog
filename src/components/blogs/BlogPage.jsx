import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_POST } from '../../graphQL/queries'
import { useQuery } from '@apollo/client'
import Spinner from '../loading/Spinner'

const BlogPage = () => {
  const { slug } = useParams()
  const {data , error , loading} = useQuery(GET_POST ,{
    variables: {slug}
  } )
  console.log(data)
  return (
    <div>BlogPage</div>
  )
}

export default BlogPage