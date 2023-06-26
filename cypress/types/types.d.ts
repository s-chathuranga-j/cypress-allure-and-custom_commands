declare namespace Cypress {
    interface Chainable<Subject> {
      devSpecialCommand(text: String, number: Number): Chainable<any>;

      renterLogin(username: String, password: String): Chainable<any>;
    }
  }