import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Movies } from "../dummyData";
import Comments from "../components/Comments";
import Related from "../components/Related";
import Rating from "../components/Rating";

const MovieDetails = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);

  useEffect(() => {
    let movie = Movies.find((movie) => movie.slug === slug);
    if (movie) {
      setMovie(movie);
      let relatedMovies = Movies.filter((relatedMovie) => {
        return (
          relatedMovie.genre === movie.genre && relatedMovie.slug !== movie.slug
        );
      });
      // console.log(relatedMovies);
      setRelatedMovies(relatedMovies);
    }
  }, [slug]);

  return (
    <div className="text-white mb-12">
      {movie ? (
        <>
          <section className="relative flex flex-col justify-start items-center gap-4 mb-12">
            <video
              src={movie.url}
              type="video/mp4"
              controls
              className="aspect-video w-full rounded-lg mb-8 mt-12"
            ></video>
            <div>
              <h3 className="uppercase font-medium text-2xl mb-1 md:text-3xl">
                {" "}
                {movie.title}{" "}
              </h3>
              <div className="flex justify-start items-center gap-4 text-sm font-base capitalize text-gray-500 mb-8 md:text-lg">
                <span>
                  <Rating number={movie.rating} />
                </span>
                <span> {movie.duration} </span>
                <span> {movie.genre} </span>
              </div>
              <p className="text-base font-light text-left line-clamp-3 md:text-xl">
                {movie.description}
              </p>
            </div>
          </section>
          {movie && (
            <section>
              <p className="text-base md:text-xl md:font-light">
                {" "}
                Related Videos
              </p>
              <div className="flex justify-start items-center w-full my-8 gap-12">
                {relatedMovies.length !== 0 ? (
                  relatedMovies.map((relatedMovie, index) => (
                    <Related relatedMovies={relatedMovie} key={index} />
                  ))
                ) : (
                  <p className="capitalize italic text-sm text-red-500 md:text-base">
                    no similar movies found
                  </p>
                )}
              </div>
            </section>
          )}
          <Comments movie={movie} />
        </>
      ) : (
        <h4>no movie found</h4>
      )}
    </div>
  );
};

export default MovieDetails;
