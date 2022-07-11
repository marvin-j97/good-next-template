/// <reference types="cypress" />

describe("add api", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should add 1 + 2", async () => {
    const res = await cy.request("/api/add/1/2");
    expect(res.status).equals(200);
    expect(res.body.sum).equals(3);
  });

  it("Should add 3 + 0", async () => {
    const res = await cy.request("/api/add/3/0");
    expect(res.status).equals(200);
    expect(res.body.sum).equals(3);
  });

  it("Should throw 400", async () => {
    const res = await cy.request({
      url: "/api/add/3/x",
      failOnStatusCode: false,
    });
    expect(res.status).equals(400);
    expect(res.body.message).equals("Bad request");
  });
});
