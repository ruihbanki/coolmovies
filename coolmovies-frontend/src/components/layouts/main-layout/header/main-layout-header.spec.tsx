import React from "react";
import { mount } from "@cypress/react";
import MainLayoutHeader from "./main-layout-header";
import TestProvider from "../../../../tests-utils/test-provider";

it("Renders page component", () => {
  mount(
    <TestProvider>
      <MainLayoutHeader />
    </TestProvider>
  );
  cy.contains("COOLMOVIES").should("exist");
});
