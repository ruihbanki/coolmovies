import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux";
import { moviesActions } from "./movies.slice";

export const useMovies = () => {
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(moviesActions.fetch());
  }, [dispatch]);

  return {
    movies,
  };
};
