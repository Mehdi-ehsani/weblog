import React from "react";
import { useParams } from "react-router-dom";
import { GEY_AUTHOR } from "../../graphQL/queries";
import { useQuery } from "@apollo/client";
import Spinner from "../loading/Spinner";
import { Link } from "react-router-dom";

const AuthorPage = () => {
	const { slug } = useParams();

	const { loading, error, data } = useQuery(GEY_AUTHOR, {
		variables: { slug },
	});
	console.log(data);

	if (loading) return <Spinner />;
	if (error) return <h1>Error</h1>;

	return (
		<div className="flex flex-col items-center min-h-[770px] p-8">
			<img
				src={data.author.avatar.url}
				className="w-64  h-64 rounded-full"
				alt="avatar"
			/>
			<h1>{data.author.name}</h1>
			<h4>ایمیل: {data.author.email}</h4>
			<p></p>
			<div className="grid grid-cols-3 gap-4">
				{data.author.posts.map((post) => (
					<div
						className="bg-slate-100 rounded-2xl p-4 shadow-lg
                shadow-slate-300/30 border-2 border-slate-100 transition-colors hover:border-2 hover:border-sky-400"
					>
						<img className="w-full h-60 rounded-2xl" src={post.cover.url} />
						<h3 className="text-xl my-2 font-bold">{post.title}</h3>
						<p className=" text-slate-700 ">
							{post.description.text.slice(0, 163)} ...
						</p>
						<Link
							to={`/blogs/${post.slug}`}
							className="w-full h-10 rounded-xl  mt-2 block border-2 border-sky-400 leading-10 text-center  text-xl font-semibold hover:bg-sky-400 transition-colors cursor-pointer"
						>
							{" "}
							مطالعه مقاله
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default AuthorPage;
