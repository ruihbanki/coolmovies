import { Typography, Grid, Box } from "@mui/material";
import type { NextPage } from "next";
import MainLayout from "../../components/layouts/main-layout/main-layout";
import MovieCard from "../../components/movies/movie-card/movie-card";
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
      <Box mt={2}>
        <Grid container spacing={5}>
          {movies.map((movie) => (
            <Grid key={movie?.id} item flex="0 0 240px">
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Movies;
