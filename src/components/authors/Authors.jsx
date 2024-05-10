import React from 'react'
import { GET_AUTHORS } from "../../graphQL/queries";
import Spinner from "../loading/Spinner.jsx";
import { useQuery } from '@apollo/client';

const Authors = () => {
    const { loading, error, data } = useQuery(GET_AUTHORS);

	if (loading) return <Spinner/>
	if (error) return <h1>Error</h1>;
	console.log(data);  
  return (
    <div>Authors</div>
  )
}

export default Authors