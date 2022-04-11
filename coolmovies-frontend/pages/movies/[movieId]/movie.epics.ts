import { combineEpics, Epic, StateObservable } from "redux-observable";
import { Observable } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { RootState } from "../../../redux/store";
import { EpicDependencies } from "../../../redux/types";
import { movieQuery } from "./movie.graphql";
import { movieActions, MovieAction } from "./movie.slice";
import { MovieQuery } from "./movie.types";

export const fetchMoviesEpic: Epic = (
  action$: Observable<MovieAction["fetch"]>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) =>
  action$.pipe(
    filter(movieActions.fetch.match),
    switchMap(async (action) => {
      try {
        console.log(action);

        const result = await client.query<MovieQuery>({
          query: movieQuery,
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
