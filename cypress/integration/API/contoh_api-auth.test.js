/* eslint-disable no-undef */
/// <reference types = "cypress" />

describe('Tugas API Authentication', () => {

  it('Login User', () => {
    const loginUser = {
      'userEmail': 'eve.holt@reqres.in',
      'userPassword': 'cityslicka'
    }
    cy.loginViaAPI()
    cy.request('POST', 'https:reqres.in/api/users/login', loginUser).then((res) => {
      cy.log(JSON.stringify(res))
      expect(res.status).to.eq(201)
      expect(res.body.userEmail).to.eq(loginUser.userEmail)
      expect(res.body.userPassword).to.eq(loginUser.userPassword)
    })
  });
});

