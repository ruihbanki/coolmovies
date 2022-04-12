import React from "react";
import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import MainLayout from "../../../components/layouts/main-layout";
import { useMovie } from "./movie.hooks";

const Movie: NextPage = () => {
  const { movie } = useMovie();

  if (!movie) {
    return null;
  }

  return (
    <MainLayout contentBackgroundImage={movie?.imgUrl}>
      <Grid container spacing={4} alignItems="flex-end">
        <Grid item>
          <Image
            src={movie.imgUrl}
            width={200}
            height={300}
            alt="Movie image"
          />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            Creator: {movie?.userByUserCreatorId?.name}
          </Typography>
          <Typography variant="body2" mb={2}>
            Director: {movie?.movieDirectorByMovieDirectorId?.name}
          </Typography>
        </Grid>
      </Grid>
      <Typography
        component="h1"
        variant="h2"
        color="common.white"
        fontWeight={300}
        mt={4}
      >
        {movie?.title}
      </Typography>
      <Typography component="h2" variant="h6" color="common.white" mt={6}>
        Reviews
      </Typography>
      <List>
        {movie?.movieReviewsByMovieId?.edges?.map(({ node }) => (
          <ListItem key={node?.id}>
            <ListItemAvatar>
              <Avatar
                sx={{
                  border: 2,
                  borderStyle: "solid",
                  borderColor: "orange",
                }}
              >
                AA
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box display="flex" alignItems="center">
                  <Typography
                    component="span"
                    variant="body1"
                    color="common.white"
                    mr={2}
                  >
                    {node?.title}
                  </Typography>
                  <Rating value={node?.rating} readOnly size="small" />
                </Box>
              }
              secondary={node?.body}
            />
          </ListItem>
        ))}
      </List>
    </MainLayout>
  );
};

export default Movie;
