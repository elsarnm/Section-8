// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginViaAPI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')
) => {
  cy.request('POST', 'https://reqres.in/api/users/login', { 
    username: email,
    password,
  }).then((response) => {
    Cypress.Cookies.defaults({
      preserve: ['session_id', response.body.sessionId],
    })
    Cypress.Cookies.defaults({
      preserve: ['userId', response.body.userId],
    })
    Cypress.Cookies.defaults({
      preserve: ['userName', response.body.userName],
    })
    cy.request('https://reqres.in/api/login')
  })
})