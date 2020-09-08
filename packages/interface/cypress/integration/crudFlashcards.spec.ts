/* eslint-disable no-undef */

import * as faker from 'faker';

describe('CRUDDing Bar Prep Flashcards', () => {
  it('creates a flashcard and adds that to the flashcard table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/flashcards');

      cy.wait(2000);

      cy.contains('Create Flashcard').click();

      cy.get('[data-testid="create-flashcard-modal"]')
        .should('exist');

      cy
        .get('[data-testid="create-flashcard-modal-prompt"]')
        .type(faker.lorem.sentence());

      cy
        .get('[data-testid="create-flashcard-modal-answer"]')
        .type(faker.lorem.paragraph());

      cy
        .get('[data-testid="create-flashcard-modal-submit"]')
        .click();

      cy.get('[data-testid="create-flashcard-modal"]')
        .should('not.exist');
    });
  });
});
