import { Link } from "react-router-dom";

const Moviecard = ({ movies }) => {
	const { title, backdrop, slug, tags } = movies;
	return (
		<Link to={`/movie/${slug}`}>
			<section className="text-white border-none rounded-xl h-72 w-60 relative my-8 hover:scale-110">
				<div className="absolute w-full h-full bg-gradient-to-tl from-black"></div>
				<img
					src={backdrop}
					alt={title}
					className="w-full h-full object-cover rounded-xl"
				/>
				<div className="absolute w-full bottom-0 p-4 bg-gradient-to-tr from-black rounded-b-xl">
					<h3 className="uppercase font-medium text-2xl mb-2">{title}</h3>
					<div className="text-white flex justify-start items-center gap-4 ">
						{tags.map((tag, index) => (
							<button
								className="bg-blue-500 py-[0.2rem] px-2 rounded-3xl font-extralight text-xs capitalize"
								key={index}
							>
								{tag}
							</button>
						))}
					</div>
				</div>
			</section>
		</Link>
	);
};

export default Moviecard;
