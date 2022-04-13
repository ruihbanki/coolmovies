import React from "react";
import { mount } from "@cypress/react";
import MoviePage from "./index.page";
import TestProvider from "../../../tests-utils/test-provider";
import { MovieAndReviewsDocument } from "./movie.generated";

describe("Movie page", () => {
  it("should render the movie title", () => {
    mountComponent();
    cy.contains("Rogue One: A Star Wars Story").should("exist");
  });
});

const movieAndReviewsMock = {
  request: {
    query: MovieAndReviewsDocument,
    variables: {
      nodeId: "node-1",
    },
  },
  result: {
    data: {
      movie: {
        id: "1",
        nodeId: "node-1",
        title: "Rogue One: A Star Wars Story",
        releaseDate: "2016-12-16",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
        userByUserCreatorId: {
          id: "7b4c31df-04b3-452f-a9ee-e9f8836013cc",
          name: "Marle",
          __typename: "User",
        },
        movieDirectorByMovieDirectorId: {
          id: "c103cc08-ed39-4a3c-a1f3-0f431c07539e",
          name: "Gareth Edwards",
          __typename: "MovieDirector",
        },
        movieReviewsByMovieId: {
          edges: [
            {
              node: {
                id: "1",
                nodeId: "node-1",
                movieId: "70351289-8756-4101-bf9a-37fc8c7a82cd",
                title: "One of the best",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 5,
                userByUserReviewerId: {
                  id: "5f1e6707-7c3a-4acd-b11f-fd96096abd5a",
                  name: "Chrono",
                  __typename: "User",
                },
                __typename: "MovieReview",
              },
              __typename: "MovieReviewsEdge",
            },
            {
              node: {
                id: "2",
                nodeId: "node-2",
                movieId: "70351289-8756-4101-bf9a-37fc8c7a82cd",
                title: "Best Action Movie",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                rating: 4,
                userByUserReviewerId: {
                  id: "65549e6a-2389-42c5-909a-4475fdbb3e69",
                  name: "Ayla",
                  __typename: "User",
                },
                __typename: "MovieReview",
              },
              __typename: "MovieReviewsEdge",
            },
          ],
          __typename: "MovieReviewsConnection",
        },
        __typename: "Movie",
      },
    },
  },
};

function mountComponent() {
  mount(
    <TestProvider mocks={[movieAndReviewsMock]} query={{ movieId: "node-1" }}>
      <MoviePage />
    </TestProvider>
  );
}
