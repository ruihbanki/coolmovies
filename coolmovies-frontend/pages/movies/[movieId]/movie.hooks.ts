import { useRouter } from "next/router";
import { useEffect } from "react";
import { format } from "date-fns";
import {
  MovieReviewInput,
  UpdateMovieReviewInput,
} from "../../../graphql-generated/types";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { Review } from "../../../components/movies/review-dialog/review-dialog";
import { movieActions } from "./movie.slice";

const LOGGED_USER_ID = "5f1e6707-7c3a-4acd-b11f-fd96096abd5a";

export const useMovie = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const movieId = router.query.movieId! as string;

  const movie = useAppSelector((state) => state.movie.movie);

  const activeReview = useAppSelector((state) => {
    return state.movie.movie?.movieReviewsByMovieId.edges.find((edge) => {
      return edge?.node?.id === state.movie.activeMovieReviewId;
    })?.node;
  });

  const activeMovieReviewId = useAppSelector(
    (state) => state.movie.activeMovieReviewId
  );

  const addNewReview = () => {
    dispatch(movieActions.setActiveMovieReviewId("NEW"));
  };

  const editReview = (id: string) => {
    dispatch(movieActions.setActiveMovieReviewId(id));
  };

  const closeReview = () => {
    dispatch(movieActions.setActiveMovieReviewId(undefined));
  };

  const saveReview = (review: Review) => {
    if (activeReview) {
      const reviewInput: UpdateMovieReviewInput = {
        nodeId: activeReview.nodeId,
        movieReviewPatch: {
          rating: review.rating,
          title: review.title,
          body: review.body,
        },
      };
      dispatch(
        movieActions.updateReview({
          data: reviewInput,
        })
      );
    } else {
      const reviewInput: MovieReviewInput = {
        ...review,
        movieId: movie?.id,
        userReviewerId: LOGGED_USER_ID,
      };
      dispatch(
        movieActions.createReview({
          review: reviewInput,
        })
      );
    }
  };

  const canReview = (
    review?: { userByUserReviewerId?: { id: string } | null } | null
  ) => {
    return review?.userByUserReviewerId?.id === LOGGED_USER_ID;
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
    activeReview,
    addNewReview,
    canReview,
    closeReview,
    editReview,
    movie,
    reviewOpen,
    saveReview,
    releaseDate,
  };
};
