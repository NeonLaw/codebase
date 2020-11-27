/* eslint-disable no-undef */

describe('Viewing a list of people as an admin', () => {
  it('renders the person table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin');

      cy.get('[data-testid="admin-people-link-button"]').click();

      cy.url().should('include', '/admin/people');

      cy.get('[data-testid="people-table"]').should('exist');
    });
  });
});
