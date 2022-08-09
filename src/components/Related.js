import { Link } from "react-router-dom";

const Related = ({ relatedMovies }) => {
	const { backdrop, title, slug } = relatedMovies;

	return (
		<Link to={`/movie/${slug}`}>
			<section className="text-gray-300 border-none rounded-xl h-32 max-w-16 relative my-8 md:h-64 hover:scale-105">
				<div className="absolute w-full h-full bg-gradient-to-tl from-black"></div>
				<img
					src={backdrop}
					alt={title}
					className="w-full h-full object-cover rounded-xl"
				/>
				<div className="absolute w-full bottom-0 py-3 px-2 bg-gradient-to-tr from-black rounded-b-xl md:py-6">
					<h3 className="uppercase font-medium text-lg md:text-3xl">{title}</h3>
				</div>
			</section>
		</Link>
	);
};

export default Related;
