/// <reference types = "cypress" />

describe('Update User', () => {
  it('Update user', () => {
    const newUser = {
      'name': 'Queen Els',
      'job': 'QA Engineering Manager'
    } 
    cy.request('PUT', 'https:reqres.in/api/users/2', newUser).then((response) => {
      expect(response.status).equal(200)
      expect(response.body.name).to.eq(newUser.name)
    })
  })
});