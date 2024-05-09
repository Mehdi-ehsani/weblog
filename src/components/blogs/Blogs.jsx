import { useQuery } from "@apollo/client";
import { GET_POSTS } from "../../graphQL/queries";
import React from "react";
import Blog from "./Blog";

const Blogs = () => {
	const { loading, error, data } = useQuery(GET_POSTS);

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error</h1>;
	console.log(data);
	return (
		<div className="grid lg:grid-cols-3 gap-4 my-4">
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
