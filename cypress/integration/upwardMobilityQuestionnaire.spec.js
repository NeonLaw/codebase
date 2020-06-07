/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Visiting /upward-mobility', function () {
  it('renders the questionnaire a user can take', function () {
    cy.visit('http://localhost:8000/upward-mobility');
    cy.contains('Take Questionnaire').click();
    cy.url().should('include', '/upward-mobility/begin');
    cy.contains('Begin Questionnaire').click();
    cy.url().should('include', '/upward-mobility/current-worth');
    cy.url().should('not.include', '/upward-mobility/begin');
  });
});
