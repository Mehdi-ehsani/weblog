import React from "react";
import { GET_AUTHORS } from "../../graphQL/queries";
import Spinner from "../loading/Spinner.jsx";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const Authors = () => {
	const { loading, error, data } = useQuery(GET_AUTHORS);

	if (loading) return <Spinner />;
	if (error) return <h1>Error</h1>;
	console.log(data);
	return (
		<div>
			<h1 className="relative text-2xl font-bold mt-6">
				نویسنده ها:
				<span className="w-7 h-7 rounded-full absolute right-[-6px] blur-md top-[-2px] -z-10 inline-block bg-sky-400"></span>
			</h1>
			<div className="grid grid-cols-4 gap-3 my-8">
				{data.authors.map((auth) => (
					<Link
						key={auth.id}
						to={`/authors/${auth.slug}`}
						className="flex bg-slate-100 items-center justify-start gap-4 p-3 rounded-2xl cursor-pointer border-2 border-sky-400 shadow-lg
            shadow-sky-300/30"
					>
						<img
							className="w-16 rounded-full shadow-md shadow-slate-500/40"
							src={auth.avatar.url}
							alt="auth"
						/>
						<h4 className="text-2xl font-bold">{auth.name}</h4>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Authors;
