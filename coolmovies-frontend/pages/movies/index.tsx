import type { NextPage } from "next";
import MainLayout from "../../components/layouts/main-layout/main-layout";
import { useMovies } from "./movies.hooks";

const Movies: NextPage = () => {
  const { movies } = useMovies();

  return (
    <MainLayout>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default Movies;
