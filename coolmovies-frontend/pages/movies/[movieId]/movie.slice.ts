import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieReviewInput } from "../../../graphql-generated/types";
import { MovieCreated } from "../movies.types";
import { sortMovieReviewByRating } from "./movie.helpers";
import { MovieAndReviews } from "./movie.types";

interface MovieState {
  movie?: MovieAndReviews;
  error?: string;
  activeMovieReviewId?: string;
}

const initialState: MovieState = {};

export const slice = createSlice({
  initialState,
  name: "movie",
  reducers: {
    clearData: (state) => {
      state = initialState;
    },
    fetch: (state, action: PayloadAction<{ nodeId: string }>) => {},
    fetchSuccess: (state, action: PayloadAction<{ data: MovieAndReviews }>) => {
      state.movie = action.payload.data;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setActiveMovieReviewId: (
      state,
      action: PayloadAction<string | undefined>
    ) => {
      state.activeMovieReviewId = action.payload;
    },
    createReview: (
      state,
      action: PayloadAction<{ review: MovieReviewInput }>
    ) => {},
    createReviewSuccess: (
      state,
      action: PayloadAction<{ data: MovieCreated }>
    ) => {
      if (state.movie) {
        const reviews = state.movie?.movieReviewsByMovieId.edges!;
        reviews.unshift({
          node: action.payload.data,
        });
        const reviewsSorted = reviews.sort(sortMovieReviewByRating);
        state.movie.movieReviewsByMovieId.edges = reviewsSorted;
      }
      state.activeMovieReviewId = undefined;
    },
    createReviewError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { actions: movieActions } = slice;
export type MovieAction = typeof movieActions;
export default slice.reducer;
