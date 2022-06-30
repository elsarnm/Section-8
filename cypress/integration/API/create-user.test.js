/// <reference types = "cypress" />

describe('Create User', () => {
    it('Add a new user', () => {
        var user = {
            "name": 'Els',
            "job": 'QA Engineer'
        } 
        cy.request('POST', 'https:reqres.in/api/users', user).then((response) => {
            expect(response.status).equal(201)
        })
    })    
});
