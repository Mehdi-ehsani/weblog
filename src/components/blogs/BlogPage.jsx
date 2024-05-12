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
  
  if (loading) return <Spinner />;
	if (error) return <h1>Error</h1>;

  return (
    <div>
      <img src={data.post.cover.url} alt="cover" />
      <div>
        <img src={data.post.author.avatar.url} alt="avatar" />
        <h2>{data.post.author.name}</h2>
      </div>
      <h1>{data.post.title}</h1>
      <p>{data.post.description.text}</p>
    </div>
  )
}

export default BlogPage