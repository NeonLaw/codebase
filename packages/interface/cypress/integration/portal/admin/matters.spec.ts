/* eslint-disable no-undef */

import * as faker from 'faker';

describe('CRUD-ing a matter as an admin', () => {
  it('renders the matters table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/portal/admin');

      cy.get('[data-testid="admin-matters-link-button"]').click();

      cy.url().should('include', '/admin/matters');

      cy.get('[data-testid="matters-table"]').should('exist');

      cy.contains('Create Matter').click();

      cy.get('[data-testid="create-matter-modal"]')
        .should('exist');

      cy.get('[data-testid="create-matter-form-name"]')
        .type(faker.lorem.sentence());

      cy.get('[data-testid="create-matter-form-submit"]')
        .click();

      cy.get('[data-testid="create-matter-modal"]')
        .should('not.exist');
    });
  });
});
