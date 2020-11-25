/* eslint-disable no-undef */

import * as faker from 'faker';

describe('Creating Questions', () => {
  it('creates a question and adds that to the question table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/questions');

      cy.contains('Create Question').click();

      cy.get('[data-testid="create-question-modal"]')
        .should('exist');

      cy
        .get('[data-testid="create-question-form-prompt"]')
        .type(faker.lorem.sentence());

      cy.get(
        '[data-testid="create-question-form-question-type"] ' +
        'input#react-select-2-input'
      ).type('Single Choice{enter}');

      cy.get('[data-testid="create-question-form-submit"]')
        .click();

      cy.get('[data-testid="create-question-modal"]')
        .should('not.exist');
    });
  });
});
