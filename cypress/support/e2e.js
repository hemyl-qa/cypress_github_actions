// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'



Cypress.Commands.overwrite('type', (originalFn, subject, text, options = {}) => {
  
    if (subject.attr('type') === 'password') {
      Cypress.log({
        name: 'type',
        message: '*'.repeat(text.length),
      });
  
      return originalFn(subject, text, { ...options, log: false });
    }
  
    return originalFn(subject, text, options);
  });


  Cypress.Commands.add('login', (email, password) => {
    cy.visit('/', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
  
    cy.get('button').contains('Sign In').click();
  
    cy.get(selectorsLogin.emailField).type(email);
    cy.get(selectorsLogin.passwordField).type(password, { sensitive: true });

    cy.get(selectorsLogin.loginButton).click();
  
    cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
  });

  