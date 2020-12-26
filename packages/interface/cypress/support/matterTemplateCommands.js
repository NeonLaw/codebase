/// <reference types="cypress" />
/* eslint-disable no-undef */

Cypress.Commands.add('createMatterTemplate', (matterTemplateName) => {
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
    ).type(matterTemplateName);

    cy
      .get('[data-testid="create-matter-template-form-submit"]')
      .click();

    cy.get('[data-testid="create-matter-template-form"]')
      .should('not.exist');

    cy.get('[data-testid="create-matter-template-form"]')
      .should('not.exist');
  });
});
