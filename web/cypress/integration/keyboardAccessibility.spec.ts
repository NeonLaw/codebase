/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Keyboard Navigation Tests', () => {
  it('adds a "user-is-tabbing" class if the user is tabbing', () => {
    cy.visit('/');
    cy.get('body').not('user-is-tabbing');
    cy.wait(2000);
    cy.get('a').tab();
    cy.get('body').should('have.class', 'user-is-tabbing');
  });
});
