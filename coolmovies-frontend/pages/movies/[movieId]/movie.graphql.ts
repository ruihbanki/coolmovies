import { gql } from "@apollo/client";

export const movieQuery = gql`
  query Movie($nodeId: ID!) {
    movie(nodeId: $nodeId) {
      id
      nodeId
      title
      releaseDate
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
