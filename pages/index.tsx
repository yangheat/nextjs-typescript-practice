import { useEffect, useState } from "react";
import Seo from "../components/Seo";
interface IApiMovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const API_KEY = "22a2d90859c8d90b696bc7d91d5a419e";

export default function Home() {
  const [movies, setMovies] = useState<IApiMovieProps[]>();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie: IApiMovieProps) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </>
  );
}
