import * as faker from 'faker';

describe('Creating Questions', () => {
  it('creates a question and adds that to the question table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/portal/admin/questions');

      cy.contains('Create Question').click();

      cy.get('[data-testid="create-question-form"]')
        .should('exist');

      cy
        .get('[data-testid="question-form-prompt"]')
        .type(faker.lorem.sentence());

      cy.get('[data-testid="create-question-form-submit"]')
        .click();

      cy.get('[data-testid="create-question-modal"]')
        .should('not.exist');
    });
  });
});
