import Sample from "./sample";

describe("<Sample />", () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sample />);
  });

  it("renders", () => {
    cy.get("div[data-testid=sample]")
      .should("be.visible")
      .should("not.have.css", "display", "none");
  });

  it("renders the text", () => {
    cy.get("div[data-testid=sample]").contains("Sample");
  });
});
