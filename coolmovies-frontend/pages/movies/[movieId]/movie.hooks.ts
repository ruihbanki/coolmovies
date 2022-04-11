import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux";
import { movieActions } from "./movie.slice";

export const useMovie = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const movieId = router.query.movieId! as string;

  const movie = useAppSelector((state) => state.movie.movie);

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

  return {
    movie,
  };
};
