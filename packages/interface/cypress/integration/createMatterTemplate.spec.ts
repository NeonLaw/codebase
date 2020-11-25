/* eslint-disable no-undef */

import * as faker from 'faker';

describe('Creating Matter Templates', () => {
  it(
    'creates a matter template and adds that to the matter template table',
    () => {
      cy.loginAsAdminUser().then(() => {
        cy.visit('/admin/matter-templates');

        cy.wait(1000);

        cy.contains('Create Matter Template').click();

        cy.wait(1000);

        cy.get('[data-testid="create-matter-template-form"]')
          .should('exist');

        cy
          .get('[data-testid="create-matter-template-form-name"]')
          .type(faker.lorem.sentence());

        cy.get(
          '[data-testid="create-matter-template-form-javascript-module"]'
        ).type(faker.lorem.sentence());

        cy
          .get('[data-testid="create-matter-template-form-submit"]')
          .click();

        cy.get('[data-testid="create-matter-template-form"]')
          .should('not.exist');
      });
    }
  );
});
