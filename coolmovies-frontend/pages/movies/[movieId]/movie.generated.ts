import * as Types from '../../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MovieAndReviewsQueryVariables = Types.Exact<{
  nodeId: Types.Scalars['ID'];
}>;


export type MovieAndReviewsQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: any, nodeId: string, title: string, releaseDate: any, imgUrl: string, userByUserCreatorId?: { __typename?: 'User', id: any, name: string } | null, movieDirectorByMovieDirectorId?: { __typename?: 'MovieDirector', id: any, name: string } | null, movieReviewsByMovieId: { __typename?: 'MovieReviewsConnection', edges: Array<{ __typename?: 'MovieReviewsEdge', node?: { __typename?: 'MovieReview', id: any, movieId: any, title: string, body?: string | null, rating?: number | null, userByUserReviewerId?: { __typename?: 'User', id: any, name: string } | null } | null }> } } | null };


export const MovieAndReviewsDocument = gql`
    query MovieAndReviews($nodeId: ID!) {
  movie(nodeId: $nodeId) {
    id
    nodeId
    title
    releaseDate
    imgUrl
    userByUserCreatorId {
      id
      name
    }
    movieDirectorByMovieDirectorId {
      id
      name
    }
    movieReviewsByMovieId {
      edges {
        node {
          id
          movieId
          title
          body
          rating
          userByUserReviewerId {
            id
            name
          }
        }
      }
    }
  }
}
    `;

/**
 * __useMovieAndReviewsQuery__
 *
 * To run a query within a React component, call `useMovieAndReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieAndReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieAndReviewsQuery({
 *   variables: {
 *      nodeId: // value for 'nodeId'
 *   },
 * });
 */
export function useMovieAndReviewsQuery(baseOptions: Apollo.QueryHookOptions<MovieAndReviewsQuery, MovieAndReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieAndReviewsQuery, MovieAndReviewsQueryVariables>(MovieAndReviewsDocument, options);
      }
export function useMovieAndReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieAndReviewsQuery, MovieAndReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieAndReviewsQuery, MovieAndReviewsQueryVariables>(MovieAndReviewsDocument, options);
        }
export type MovieAndReviewsQueryHookResult = ReturnType<typeof useMovieAndReviewsQuery>;
export type MovieAndReviewsLazyQueryHookResult = ReturnType<typeof useMovieAndReviewsLazyQuery>;
export type MovieAndReviewsQueryResult = Apollo.QueryResult<MovieAndReviewsQuery, MovieAndReviewsQueryVariables>;