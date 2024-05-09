import React from "react";

const Blog = ({ id, title, description, author, cover, slug }) => {
	return (
		<div
			className="bg-slate-100 cursor-pointer rounded-2xl p-4 shadow-lg
            shadow-slate-300/30 border-2 border-slate-100 transition-colors hover:border-2 hover:border-blue-300"
		>
			<div className="flex mb-2 pb-2 border-b-2 border-slate-300 justify-start items-center gap-2">
				<img
					className="w-14 rounded-full shadow-md shadow-slate-500/40"
					src={author.avatar.url}
				/>
				<h4 className="font-semibold text-[18px]">{author.name}</h4>
			</div>
			<div>
				<img className="w-full h-60 rounded-2xl" src={cover.url} />
				<h3 className="text-xl my-2 font-bold">{title}</h3>
				<p className=" text-slate-700 ">{description.text.slice(0, 163)} ...</p>
			</div>
		</div>
	);
};

export default Blog;
