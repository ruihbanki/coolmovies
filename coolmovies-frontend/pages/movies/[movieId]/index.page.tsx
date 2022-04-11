import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import MainLayout from "../../../components/layouts/main-layout";
import { useMovie } from "./movie.hooks";

const Movie: NextPage = () => {
  const { movie } = useMovie();

  return (
    <MainLayout>
      <Typography
        component="h1"
        variant="h4"
        color="common.white"
        fontWeight={300}
        sx={{ m: 0 }}
      >
        {movie?.title}
      </Typography>
      <Box mt={2}></Box>
    </MainLayout>
  );
};

export default Movie;
