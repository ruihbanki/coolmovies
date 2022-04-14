import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MainLayout from "../../../components/layouts/main-layout";
import ReviewDialog from "../../../components/movies/review-dialog";
import EditSvg from "../../../../public/edit.svg";
import { useMovie } from "./movie.hooks";

const Movie: NextPage = () => {
  const {
    activeReview,
    addNewReview,
    canReview,
    closeReview,
    editReview,
    goBack,
    movie,
    reviewOpen,
    saveReview,
    releaseDate,
  } = useMovie();

  return (
    <>
      <MainLayout contentBackgroundImage={movie?.imgUrl}>
        <IconButton color="primary" sx={{ mb: 2, border: 1 }} onClick={goBack}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item>
            {movie?.imgUrl && (
              <Image
                src={movie.imgUrl}
                width={200}
                height={300}
                alt="Movie image"
              />
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2">
              Creator: {movie?.userByUserCreatorId?.name}
            </Typography>
            <Typography variant="body2">
              Director: {movie?.movieDirectorByMovieDirectorId?.name}
            </Typography>
            <Typography variant="body2" mb={2}>
              Relase date: {releaseDate}
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
        <Box display="flex" mt={6} alignItems="center">
          <Typography component="h2" variant="h6" color="common.white" mr={4}>
            Reviews
          </Typography>
          <Button onClick={addNewReview} size="large">
            Add review
          </Button>
        </Box>
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
                    {canReview(node) && (
                      <IconButton
                        color="primary"
                        sx={{ ml: 1 }}
                        onClick={() => editReview(node?.id)}
                      >
                        <EditSvg fill="currentColor" />
                      </IconButton>
                    )}
                  </Box>
                }
                secondary={node?.body}
              />
            </ListItem>
          ))}
        </List>
      </MainLayout>
      <ReviewDialog
        open={reviewOpen}
        onClose={closeReview}
        onSave={saveReview}
        review={activeReview}
      />
    </>
  );
};

export default Movie;
