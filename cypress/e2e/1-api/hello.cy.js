/// <reference types="cypress" />

describe("hello api", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should call peter", async () => {
    const res = await cy.request("/api/hello/peter");
    expect(res.body.name).equals("peter");
  });
});
