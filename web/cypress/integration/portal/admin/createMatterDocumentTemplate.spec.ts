import * as faker from 'faker';

describe('Creating Matter Document Templates', () => {
  it('creates a matter document template',
    () => {
      cy.loginAsAdminUser().then(() => {
        cy.visit('/portal/admin/matter-document-templates');

        cy.wait(1000);

        cy.contains('Create Document Template').click();

        cy.wait(1000);

        cy.get('[data-testid="create-matter-document-template-form"]')
          .should('exist');

        cy
          .get('[data-testid="matter-document-template-form-name"]')
          .type(faker.lorem.sentence());

        cy
          .get('[data-testid="matter-document-template-form-description"]')
          .type(faker.lorem.sentence());

        cy
          .get('[data-testid="create-matter-document-template-form-submit"]')
          .click();

        cy.get('[data-testid="create-matter-document-template-form"]')
          .should('not.exist');
      });
    }
  );
});
