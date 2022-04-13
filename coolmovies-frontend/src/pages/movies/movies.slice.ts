import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "./movies.types";

interface MoviesState {
  movies: Movie[];
  error?: string;
}

const initialState: MoviesState = {
  movies: [],
};

export const slice = createSlice({
  initialState,
  name: "movies",
  reducers: {
    clearData: (state) => {
      state.movies = [];
    },
    fetch: () => {},
    fetchSuccess: (state, action: PayloadAction<{ data: Movie[] }>) => {
      state.movies = action.payload.data;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { actions: moviesActions } = slice;
export type MoviesAction = typeof moviesActions;
export default slice.reducer;
