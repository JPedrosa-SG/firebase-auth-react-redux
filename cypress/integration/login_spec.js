describe("login and general behaviour", () => {
  it("user login and general behaviour", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("button", {
      name: /login/i,
    }).click();
    cy.findByRole("textbox", {
      name: /email/i,
    }).type("cat@email.com");
    cy.findByPlaceholderText("Password").type("123456");
    cy.findByRole("button", {
      name: /login/i,
    }).click();
    cy.findByText(/employees/i).click();
    cy.findByRole("link", {
      name: /notifications/i,
    }).click();
    cy.findByText(/settings/i).click();
    cy.findByText(/dashboard/i).click();
    cy.findByRole("button", {
      name: /without label/i,
    }).click();
    cy.findByRole("option", {
      name: /thirty/i,
    }).click();
    cy.get(
      "#root > div > div > main > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div"
    ).click();
    cy.get(
      "#root > div > div > main > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div"
    ).click();
    cy.get(
      "#root > div > div > main > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div"
    ).click();
    cy.findByRole("button", {
      name: /without label/i,
    }).click();
    cy.findByRole("option", {
      name: /ten/i,
    }).click();
    cy.visit("http://localhost:3000");
    cy.findByRole("button", {
      name: /logout/i,
    }).click();
  });
});
