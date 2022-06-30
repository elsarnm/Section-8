/// <reference types = "cypress" />

describe('User Login', () => {
  it('Successfully login with email and password', () => {
    cy.loginViaAPI()
  })
});