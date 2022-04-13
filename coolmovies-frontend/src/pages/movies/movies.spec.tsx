import React from "react";
import { mount } from "@cypress/react";
import MoviesPage from "./index.page";
import TestProvider from "../../tests-utils/test-provider";
import { AllMoviesDocument } from "./movies.generated";

describe("Movies page", () => {
  it("should render the title", () => {
    mountComponent();
    cy.contains("Movies").should("exist");
  });

  it("should render the movies", () => {
    mountComponent();
    cy.contains("Rogue One: A Star Wars Story").should("exist");
    cy.contains("Star Wars: A New Hope").should("exist");
  });

  it.skip("should go to movie page when click in the movie image", () => {
    mountComponent();
    cy.contains("Rogue One: A Star Wars Story")
      .parent()
      .parent()
      .find("a")
      .click();
  });
});

const allMoviesMock = {
  request: {
    query: AllMoviesDocument,
    variables: {},
  },
  result: {
    data: {
      allMovies: {
        nodes: [
          {
            id: "1",
            nodeId: "node-1",
            imgUrl: "https://upload.wikimedia.org",
            title: "Rogue One: A Star Wars Story",
            releaseDate: "2016-12-16",
          },
          {
            id: "2",
            nodeId: "node-2",
            imgUrl: "https://upload.wikimedia.org",
            title: "Star Wars: A New Hope",
            releaseDate: "1977-05-25",
          },
        ],
      },
    },
  },
};

function mountComponent() {
  mount(
    <TestProvider mocks={[allMoviesMock]}>
      <MoviesPage />
    </TestProvider>
  );
}
