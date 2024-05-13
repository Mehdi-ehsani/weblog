import React from 'react'
import { useParams } from 'react-router-dom'
import { GET_POST } from '../../graphQL/queries'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import Spinner from '../loading/Spinner'

const BlogPage = () => {
  const { slug } = useParams()
  const {data , error , loading} = useQuery(GET_POST ,{
    variables: {slug}
  } )
  
  if (loading) return <Spinner />;
	if (error) return <h1>Error</h1>;

  return (
    <div className='flex flex-col items-center '>
      <img src={data.post.cover.url} className='w-2/3 my-6 rounded-3xl shadow-2xl
            shadow-slate-500/40' alt="cover" />
      <Link to={`/authors/${data.post.author.slug}`} className='w-2/3 flex items-center justify-start gap-4 '>
        <img src={data.post.author.avatar.url} className='w-24 rounded-full shadow-md shadow-slate-500/40 hover:border-4 border-sky-500 transition-all' alt="avatar" />
        <h2 className='font-bold text-2xl'>{data.post.author.name}</h2>
      </Link>
      <h1 className='font-semibold text-2xl w-2/3 my-3 text-sky-500 '>{data.post.title}</h1>
      <p className='w-2/3 text-lg'>{data.post.description.text}</p>
    </div>
  )
}

export default BlogPage