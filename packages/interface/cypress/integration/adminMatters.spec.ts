/* eslint-disable no-undef */

describe('Viewing a list of matters as an admin', () => {
  it('renders the matters table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin');

      cy.get('[data-testid="admin-matters-link-button"]').click();

      cy.url().should('include', '/admin/matters');

      cy.get('[data-testid="matters-table"]').should('exist');
    });
  });
});
