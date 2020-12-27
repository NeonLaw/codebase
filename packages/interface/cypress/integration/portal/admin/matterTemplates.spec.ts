import * as faker from 'faker';

describe('CRUDding Matter Templates', () => {
  it(
    'creates a matter template, adds that to the matter template table, '+
    'and optionally allows for updating it',
    () => {
      const matterTemplateName = faker.lorem.sentence();

      cy.createMatterTemplate(matterTemplateName);

      cy.loginAsAdminUser().then(() => {
        cy.visit('/portal/admin/matter-templates');

        cy.wait(1000);

        cy.contains('Create Matter Template').click();

        cy.wait(1000);

        cy.get('[data-testid="create-matter-template-form"]')
          .should('exist');

        cy
          .get('[data-testid="matter-template-form-name"]')
          .type(matterTemplateName);

        cy.get(
          '[data-testid="matter-template-form-javascript-module"]'
        ).type(faker.lorem.sentence());

        cy
          .get('[data-testid="create-matter-template-form-submit"]')
          .click();

        cy.get('[data-testid="create-matter-template-form"]')
          .should('not.exist');

        cy.get('[data-testid="create-matter-template-form"]')
          .should('not.exist');

      });

      cy.deleteMatterTemplate(matterTemplateName);
    }
  );
});
