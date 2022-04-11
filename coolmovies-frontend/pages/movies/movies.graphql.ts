import { gql } from "@apollo/client";

export const moviesQuery = gql`
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
