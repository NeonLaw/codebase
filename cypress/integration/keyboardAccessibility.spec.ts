/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Keyboard Navigation Tests', () => {
  it(
    'body have user-is-tabbing class only if the user is tabbing',
    { browser: '!chrome' },
    () => {
      localStorage.setItem('darkMode', 'true');
      cy.visit('/');
      cy.get('body').not('user-is-tabbing');
      cy.get('a').tab();
      cy.get('body').should('have.class', 'user-is-tabbing');
    });
});
