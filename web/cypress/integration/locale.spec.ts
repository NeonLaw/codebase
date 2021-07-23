/* eslint-disable no-undef */

describe('Visiting different Locale', function () {
  it('renders the Spanish for Practice Areas', function () {
    cy.visit('/');
    cy.contains('Practice Areas').should('be.visible');
    cy.visit('/es-419');
    cy.contains('Áreas de práctica').should('be.visible');
    cy.visit('/ur');
    cy.contains('پریکٹس ایریاز').should('be.visible');
  });
});
