/// <reference types = "cypress" />

describe('User Login', () => {
  it('Successfully login with email and password', () => {
    cy.loginViaAPI()
    cy.request('GET', '/login').then((res) => {
      cy.log(JSON.stringify(res))
    })
  })
});