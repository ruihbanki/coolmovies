import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { CreateStoreOptions } from "./types";
import { moviesEpics } from "../pages/movies/movies.epics";
import { movieEpics } from "../pages/movies/[movieId]/movie.epics";
import moviesReducer from "../pages/movies/movies.slice";
import movieReducer from "../pages/movies/[movieId]/movie.slice";

const rootEpic = combineEpics(moviesEpics, movieEpics);

export const createStore = ({ epicDependencies }: CreateStoreOptions) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: epicDependencies,
  });

  const createdStore = configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(epicMiddleware),
    reducer: {
      movies: moviesReducer,
      movie: movieReducer,
    },
  });

  epicMiddleware.run(rootEpic);

  return createdStore;
};

export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>;
export type AppDispatch = ReturnType<typeof createStore>["dispatch"];

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
