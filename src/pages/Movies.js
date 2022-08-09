import { useState, useEffect } from "react";
import Moviecard from "../components/Moviecard";
import { Movies } from "../dummyData";

const Home = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		setMovies(Movies);
	}, []);

	return (
		<main className="text-white md:grid md:grid-cols-2 md:gap-x-12 lg:grid-cols-3 xl:grid-cols-4">
			{movies.map((Movie) => {
				return <Moviecard key={Movie.title} movies={Movie} />;
			})}
		</main>
	);
};

export default Home;
