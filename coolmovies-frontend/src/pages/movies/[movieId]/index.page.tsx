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
    releaseDate,
    reviewOpen,
    saveReview,
  } = useMovie();

  return (
    <>
      <MainLayout contentBackgroundImage={movie?.imgUrl}>
        <IconButton color="primary" sx={{ mb: 4, border: 1 }} onClick={goBack}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="flex-end">
          <Grid item xs={5} md="auto">
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
          variant={{ xs: "h2", md: "h4" }}
          color="common.white"
          fontWeight={300}
          mt={{ xs: 2, md: 4 }}
        >
          {movie?.title}
        </Typography>
        <Box display="flex" mt={{ xs: 2, md: 6 }} alignItems="center">
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
                  <Box
                    display="flex"
                    alignItems={{ md: "center" }}
                    flexDirection={{ xs: "column", md: "row" }}
                  >
                    <Typography
                      component="span"
                      variant="body1"
                      color="common.white"
                      mr={2}
                    >
                      {node?.title}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Rating value={node?.rating} readOnly size="small" />
                      {canReview(node) && (
                        <IconButton
                          color="primary"
                          sx={{ ml: 1 }}
                          onClick={() => editReview(node?.id)}
                          aria-label="Edit"
                        >
                          <EditSvg fill="currentColor" />
                        </IconButton>
                      )}
                    </Box>
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
