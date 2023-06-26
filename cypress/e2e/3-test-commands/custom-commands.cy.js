/// <reference types="cypress" />

describe('custom commands in cypress', () => {
    it('using custom command in commands file', () => {
        cy.devSpecialCommand('Hello World', 123);
    })

    it('using custom command outside of the commands file', () => {
        cy.renterLogin('testuser', 'testpassword')
    })
})