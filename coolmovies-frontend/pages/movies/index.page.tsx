import { Typography, Grid } from "@mui/material";
import type { NextPage } from "next";
import MainLayout from "../../components/layouts/main-layout/main-layout";
import MovieCard from "../../components/movies/movie/movie-card";
import { useMovies } from "./movies.hooks";

const Movies: NextPage = () => {
  const { movies } = useMovies();

  return (
    <MainLayout>
      <Typography
        component="h1"
        variant="h4"
        color="common.white"
        fontWeight={300}
        sx={{ m: 0 }}
      >
        Movies
      </Typography>
      <Grid>
        {movies.map((movie) => (
          <Grid key={movie.id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Movies;
