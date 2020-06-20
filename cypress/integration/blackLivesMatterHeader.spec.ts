/* eslint-disable no-undef */

describe('Visiting any page', function () {
  it('renders the Black Lives Matter header', function () {
    cy.visit('http://localhost:8000/');
    cy.contains('Black Lives Matter').should('be.visible');
    cy.visit('http://localhost:8000/blog');
    cy.contains('Black Lives Matter').should('be.visible');
    cy.visit('http://localhost:8000/upward-mobility');
    cy.contains('Black Lives Matter').should('be.visible');
  });
});
