import { AllMoviesQuery } from "./movies.generated";

export type Movie = NonNullable<AllMoviesQuery["allMovies"]>["nodes"][number];
