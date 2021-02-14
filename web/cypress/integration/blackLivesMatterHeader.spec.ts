/* eslint-disable no-undef */

describe('Visiting any page', function () {
  it('renders the Black Lives Matter header', function () {
    cy.visit('/');
    cy.contains('Black Lives Matter').should('be.visible');
    cy.visit('/blog');
    cy.contains('Black Lives Matter').should('be.visible');
    cy.visit('/upward-mobility');
    cy.contains('Black Lives Matter').should('be.visible');
  });
});
