import { combineEpics, Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../redux/store";
import { EpicDependencies } from "../../redux/types";
import { moviesQuery } from "./movies.graphql";
import { moviesActions, MoviesAction } from "./movies.slice";
import { MoviesQuery } from "./movies.types";

export const fetchMoviesEpic: Epic = (
  action$: Observable<MoviesAction["fetch"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(moviesActions.fetch.match),
    switchMap(async () => {
      try {
        const result = await client.query<MoviesQuery>({
          query: moviesQuery,
        });
        return moviesActions.fetchSuccess({
          data: result.data.allMovies.nodes,
        });
      } catch (err: any) {
        return moviesActions.fetchError(err.message);
      }
    })
  );

export const moviesEpics = combineEpics(fetchMoviesEpic);
