import { AllMoviesQuery } from "./movies.generated";
import {
  CreateMovieReviewMutationResult,
  UpdateMovieReviewMutationResult,
} from "./[movieId]/movie.generated";

export type Movie = NonNullable<AllMoviesQuery["allMovies"]>["nodes"][number];

export type MovieReviewCreated = NonNullable<
  NonNullable<CreateMovieReviewMutationResult["data"]>["createMovieReview"]
>["movieReview"];

export type MovieReviewUpdated = NonNullable<
  NonNullable<UpdateMovieReviewMutationResult["data"]>["updateMovieReview"]
>["movieReview"];
