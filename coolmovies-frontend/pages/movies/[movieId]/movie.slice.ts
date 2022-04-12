import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieAndReviews } from "./movie.types";

interface MoviesState {
  movie?: MovieAndReviews;
  error?: string;
}

const initialState: MoviesState = {};

export const slice = createSlice({
  initialState,
  name: "movie",
  reducers: {
    clearData: (state) => {
      state.movie = undefined;
    },
    fetch: (state, action: PayloadAction<{ nodeId: string }>) => {},
    fetchSuccess: (state, action: PayloadAction<{ data: MovieAndReviews }>) => {
      state.movie = action.payload.data;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { actions: movieActions } = slice;
export type MovieAction = typeof movieActions;
export default slice.reducer;
