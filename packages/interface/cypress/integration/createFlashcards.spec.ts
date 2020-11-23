/* eslint-disable no-undef */

import * as faker from 'faker';

describe('Creating Bar Prep Flashcards', () => {
  it('creates a flashcard and adds that to the flashcard table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/flashcards');

      cy.wait(1000);

      cy.contains('Create Flashcard').click();

      cy.wait(1000);

      cy.get('[data-testid="create-flashcard-form"]')
        .should('exist');

      cy
        .get('[data-testid="create-flashcard-form-prompt"]')
        .type(faker.lorem.sentence());

      cy.getEditor('[data-testid="create-flashcard-form-answer"]')
        .typeInSlate(faker.lorem.paragraph());

      cy
        .get('[data-testid="create-flashcard-form-submit"]')
        .click();

      cy.get('[data-testid="create-flashcard-form"]')
        .should('not.exist');
    });
  });
});
