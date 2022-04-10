export interface Movie {
  id: string;
  imgUrl: string;
  title: string;
}

export interface MoviesQuery {
  allMovies: {
    nodes: Movie[];
  };
}
