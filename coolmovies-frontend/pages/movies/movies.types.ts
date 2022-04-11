export interface Movie {
  id: string;
  imgUrl: string;
  title: string;
  releaseDate: string;
}

export interface MoviesQuery {
  allMovies: {
    nodes: Movie[];
  };
}
