Cypress.Commands.add('renterLogin', (username, password) => { 
    cy.log(`This is our special command lets login as a renter with username ${username} and password ${password}`)
})