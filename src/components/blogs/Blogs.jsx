import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphQL/queries";
import React from "react";
import Blog from "./Blog";
import Spinner from "../loading/Spinner.jsx";

const Blogs = () => {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return <Spinner/>
	if (error) return <h1>Error</h1>;
	console.log(data);
	return (
		<div className="grid xl:grid-cols-3 xl:p-0 lg:grid-cols-2 lg:px-24 md:grid-cols-2 md:px-10 sm:grid-cols-1 sm:px-8 px-6 gap-4 my-4">
			{data.posts.map((post) => (
				<Blog
					id={post.id}
					title={post.title}
					description={post.description}
					cover={post.cover}
					author={post.author}
					slug={post.slug}
					key={post.id}
				/>
			))}
		</div>
	);
};

export default Blogs;
