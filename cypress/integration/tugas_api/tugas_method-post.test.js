/// <reference types = "cypress" />

describe('Create User', () => {
  it('Add a new user', () => {
    const user = {
      'name': 'Els',
      'job': 'QA Engineer'
    } 
    cy.request('POST', 'https:reqres.in/api/users', user).then((res) => {
      expect(res.status).equal(201)
      expect(res.body.name).to.eq(user.name)
      expect(res.body.job).to.eq(user.job)
    })
  })    
});
