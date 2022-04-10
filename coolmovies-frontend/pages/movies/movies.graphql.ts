import { gql } from "@apollo/client";

export const moviesQuery = gql`
  query AllMovies {
    allMovies {
      nodes {
        id
        imgUrl
        title
      }
    }
  }
`;
