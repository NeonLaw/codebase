/* eslint-disable no-undef */

import * as faker from 'faker';

describe('Creating Document Templates', () => {
  it(
    'creates a document template and adds that to the document template table',
    () => {
      cy.loginAsAdminUser().then(() => {
        cy.visit('/admin/document-templates');

        cy.wait(1000);

        cy.contains('Create Document Template').click();

        cy.wait(1000);

        cy.get('[data-testid="create-document-template-form"]')
          .should('exist');

        cy
          .get('[data-testid="create-document-template-form-name"]')
          .type(faker.lorem.sentence());

        cy.get(
          '[data-testid="create-document-template-form-javascript-module"]'
        ).type(faker.lorem.sentence());

        cy
          .get('[data-testid="create-document-template-form-submit"]')
          .click();

        cy.get('[data-testid="create-document-template-form"]')
          .should('not.exist');
      });
    }
  );
});
