import { useRouter } from "next/router";
import { useEffect } from "react";
import { format } from "date-fns";
import { MovieReviewInput } from "../../../graphql-generated/types";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { movieActions } from "./movie.slice";

export const useMovie = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const movieId = router.query.movieId! as string;

  const movie = useAppSelector((state) => state.movie.movie);

  const activeMovieReviewId = useAppSelector(
    (state) => state.movie.activeMovieReviewId
  );

  const addNewReview = () => {
    dispatch(movieActions.setActiveMovieReviewId("NEW"));
  };

  const closeReview = () => {
    dispatch(movieActions.setActiveMovieReviewId(undefined));
  };

  const saveReview = (review: Review) => {
    const reviewInput: MovieReviewInput = {
      ...review,
      movieId,
      userReviewerId: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
    };
    dispatch(
      movieActions.createReview({
        review: reviewInput,
      })
    );
  };

  useEffect(() => {
    dispatch(
      movieActions.fetch({
        nodeId: movieId,
      })
    );
  }, [dispatch, movieId]);

  useEffect(() => {
    return () => {
      dispatch(movieActions.clearData());
    };
  }, [dispatch]);

  const reviewOpen = !!activeMovieReviewId;

  const releaseDate = movie?.releaseDate
    ? format(new Date(movie?.releaseDate! as string), "MM/dd/yyyy")
    : "";

  return {
    addNewReview,
    closeReview,
    movie,
    reviewOpen,
    saveReview,
    releaseDate,
  };
};
