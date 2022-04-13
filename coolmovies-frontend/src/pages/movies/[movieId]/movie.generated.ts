import * as Types from '../../../graphql-generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MovieReviewFragFragment = { __typename?: 'MovieReview', id: any, nodeId: string, movieId: any, title: string, body?: string | null, rating?: number | null, userByUserReviewerId?: { __typename?: 'User', id: any, name: string } | null };

export type MovieAndReviewsQueryVariables = Types.Exact<{
  nodeId: Types.Scalars['ID'];
}>;


export type MovieAndReviewsQuery = { __typename?: 'Query', movie?: { __typename?: 'Movie', id: any, nodeId: string, title: string, releaseDate: any, imgUrl: string, userByUserCreatorId?: { __typename?: 'User', id: any, name: string } | null, movieDirectorByMovieDirectorId?: { __typename?: 'MovieDirector', id: any, name: string } | null, movieReviewsByMovieId: { __typename?: 'MovieReviewsConnection', edges: Array<{ __typename?: 'MovieReviewsEdge', node?: { __typename?: 'MovieReview', id: any, nodeId: string, movieId: any, title: string, body?: string | null, rating?: number | null, userByUserReviewerId?: { __typename?: 'User', id: any, name: string } | null } | null }> } } | null };

export type CreateMovieReviewMutationVariables = Types.Exact<{
  input: Types.CreateMovieReviewInput;
}>;


export type CreateMovieReviewMutation = { __typename?: 'Mutation', createMovieReview?: { __typename?: 'CreateMovieReviewPayload', clientMutationId?: string | null, movieReview?: { __typename?: 'MovieReview', id: any, nodeId: string, movieId: any, title: string, body?: string | null, rating?: number | null, userByUserReviewerId?: { __typename?: 'User', id: any, name: string } | null } | null } | null };

export type UpdateMovieReviewMutationVariables = Types.Exact<{
  input: Types.UpdateMovieReviewInput;
}>;


export type UpdateMovieReviewMutation = { __typename?: 'Mutation', updateMovieReview?: { __typename?: 'UpdateMovieReviewPayload', clientMutationId?: string | null, movieReview?: { __typename?: 'MovieReview', id: any, nodeId: string, movieId: any, title: string, body?: string | null, rating?: number | null, userByUserReviewerId?: { __typename?: 'User', id: any, name: string } | null } | null } | null };

export const MovieReviewFragFragmentDoc = gql`
    fragment MovieReviewFrag on MovieReview {
  id
  nodeId
  movieId
  title
  body
  rating
  userByUserReviewerId {
    id
    name
  }
}
    `;
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
    movieReviewsByMovieId(orderBy: RATING_DESC) {
      edges {
        node {
          ...MovieReviewFrag
        }
      }
    }
  }
}
    ${MovieReviewFragFragmentDoc}`;

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
export const CreateMovieReviewDocument = gql`
    mutation CreateMovieReview($input: CreateMovieReviewInput!) {
  createMovieReview(input: $input) {
    clientMutationId
    movieReview {
      ...MovieReviewFrag
    }
  }
}
    ${MovieReviewFragFragmentDoc}`;
export type CreateMovieReviewMutationFn = Apollo.MutationFunction<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;

/**
 * __useCreateMovieReviewMutation__
 *
 * To run a mutation, you first call `useCreateMovieReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieReviewMutation, { data, loading, error }] = useCreateMovieReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMovieReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>(CreateMovieReviewDocument, options);
      }
export type CreateMovieReviewMutationHookResult = ReturnType<typeof useCreateMovieReviewMutation>;
export type CreateMovieReviewMutationResult = Apollo.MutationResult<CreateMovieReviewMutation>;
export type CreateMovieReviewMutationOptions = Apollo.BaseMutationOptions<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;
export const UpdateMovieReviewDocument = gql`
    mutation UpdateMovieReview($input: UpdateMovieReviewInput!) {
  updateMovieReview(input: $input) {
    clientMutationId
    movieReview {
      ...MovieReviewFrag
    }
  }
}
    ${MovieReviewFragFragmentDoc}`;
export type UpdateMovieReviewMutationFn = Apollo.MutationFunction<UpdateMovieReviewMutation, UpdateMovieReviewMutationVariables>;

/**
 * __useUpdateMovieReviewMutation__
 *
 * To run a mutation, you first call `useUpdateMovieReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieReviewMutation, { data, loading, error }] = useUpdateMovieReviewMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMovieReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieReviewMutation, UpdateMovieReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMovieReviewMutation, UpdateMovieReviewMutationVariables>(UpdateMovieReviewDocument, options);
      }
export type UpdateMovieReviewMutationHookResult = ReturnType<typeof useUpdateMovieReviewMutation>;
export type UpdateMovieReviewMutationResult = Apollo.MutationResult<UpdateMovieReviewMutation>;
export type UpdateMovieReviewMutationOptions = Apollo.BaseMutationOptions<UpdateMovieReviewMutation, UpdateMovieReviewMutationVariables>;