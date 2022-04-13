import { AllMoviesQuery } from "./movies.generated";
import { CreateMovieReviewMutationResult } from "./[movieId]/movie.generated";

export type Movie = NonNullable<AllMoviesQuery["allMovies"]>["nodes"][number];

export type MovieCreated = NonNullable<
  NonNullable<CreateMovieReviewMutationResult["data"]>["createMovieReview"]
>["movieReview"];
