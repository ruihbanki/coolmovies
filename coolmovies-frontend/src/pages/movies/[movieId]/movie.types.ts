import {
  CreateMovieReviewMutationResult,
  MovieAndReviewsQuery,
  UpdateMovieReviewMutationResult,
} from "./movie.generated";

export type MovieAndReviews = MovieAndReviewsQuery["movie"];

export type MovieReviewCreated = NonNullable<
  NonNullable<CreateMovieReviewMutationResult["data"]>["createMovieReview"]
>["movieReview"];

export type MovieReviewUpdated = NonNullable<
  NonNullable<UpdateMovieReviewMutationResult["data"]>["updateMovieReview"]
>["movieReview"];
