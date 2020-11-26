/* eslint-disable no-undef */

describe('Viewing a list of people as an admin', () => {
  it('creates a question and adds that to the question table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/people');

      cy.get('[data-testid="people-table"]').should('exist');
    });
  });
});
