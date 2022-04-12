import { combineEpics, Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../../redux/store";
import { EpicDependencies } from "../../../redux/types";
import {
  MovieAndReviewsDocument,
  MovieAndReviewsQuery,
} from "./movie.generated";
import { movieActions, MovieAction } from "./movie.slice";

export const fetchMoviesEpic: Epic = (
  action$: Observable<MovieAction["fetch"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(movieActions.fetch.match),
    switchMap(async (action) => {
      try {
        const result = await client.query<MovieAndReviewsQuery>({
          query: MovieAndReviewsDocument,
          variables: {
            nodeId: action.payload.nodeId,
          },
        });
        return movieActions.fetchSuccess({
          data: result.data.movie,
        });
      } catch (err: any) {
        return movieActions.fetchError(err.message);
      }
    })
  );

export const movieEpics = combineEpics(fetchMoviesEpic);
