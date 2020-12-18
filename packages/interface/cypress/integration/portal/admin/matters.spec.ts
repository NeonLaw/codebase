/* eslint-disable no-undef */

import * as faker from 'faker';

describe('CRUD-ing a matter as an admin', () => {
  it('renders the matters table', () => {
    const matterName = faker.lorem.sentence();

    cy.loginAsAdminUser().then(() => {
      cy.visit('/portal/admin');

      cy.get('[data-testid="admin-matters-link-button"]').click();

      cy.url().should('include', '/admin/matters');

      cy.get('[data-testid="matters-table"]').should('exist');

      cy.contains('Create Matter').click();

      cy.get('[data-testid="create-matter-modal"]')
        .should('exist');

      cy.get('[data-testid="create-matter-form-name"]')
        .type(matterName);

      cy.get('[data-testid="create-matter-form-submit"]')
        .click();

      cy.get('[data-testid="create-matter-modal"]')
        .should('not.exist');

      cy.get('[data-testid="matters-table"]')
        .within(() => {
          cy.contains(matterName).click();
          cy.url().should('include', '/admin/matters/');
          cy.get('[data-testid="matters-table"]').should('not.exist');
          cy.contains('Delete Matter').click();
          cy.url().should('not.include', '/admin/matters/');
          cy.url().should('include', '/admin/matters');
        });
    });
  });
});
