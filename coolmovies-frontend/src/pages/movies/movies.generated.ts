import * as Types from '../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AllMoviesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllMoviesQuery = { __typename?: 'Query', allMovies?: { __typename?: 'MoviesConnection', nodes: Array<{ __typename?: 'Movie', id: any, nodeId: string, imgUrl: string, title: string, releaseDate: any } | null> } | null };


export const AllMoviesDocument = gql`
    query AllMovies {
  allMovies {
    nodes {
      id
      nodeId
      imgUrl
      title
      releaseDate
    }
  }
}
    `;

/**
 * __useAllMoviesQuery__
 *
 * To run a query within a React component, call `useAllMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMoviesQuery(baseOptions?: Apollo.QueryHookOptions<AllMoviesQuery, AllMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllMoviesQuery, AllMoviesQueryVariables>(AllMoviesDocument, options);
      }
export function useAllMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllMoviesQuery, AllMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllMoviesQuery, AllMoviesQueryVariables>(AllMoviesDocument, options);
        }
export type AllMoviesQueryHookResult = ReturnType<typeof useAllMoviesQuery>;
export type AllMoviesLazyQueryHookResult = ReturnType<typeof useAllMoviesLazyQuery>;
export type AllMoviesQueryResult = Apollo.QueryResult<AllMoviesQuery, AllMoviesQueryVariables>;