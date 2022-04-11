interface Person {
  name: string;
}

interface Review {
  id: string;
  title: string;
  body: string;
  rating: number;
  userByUserReviewerId: Person;
}

export interface Movie {
  id: string;
  nodeId: string;
  imgUrl: string;
  title: string;
  releaseDate: string;
  userByUserCreatorId: Person;
  movieDirectorByMovieDirectorId: Person;
  movieReviewsByMovieId: {
    edges: { node: Review }[];
  };
}
export interface MovieQuery {
  movie: Movie;
}
