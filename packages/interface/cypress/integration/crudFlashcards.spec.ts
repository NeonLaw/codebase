/* eslint-disable no-undef */

describe('CRUDDing Bar Prep Flashcards', () => {
  it('adds the flashcard to the flashcard table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/flashcards');

      cy.contains('Create Flashcard').click();

      cy
        .get('[data-testid="create-flashcard-modal-prompt"]')
        .type('A question');

      cy
        .get('[data-testid="create-flashcard-modal-answer"]')
        .type('An answer');

      cy
        .get('[data-testid="create-flashcard-modal-submit"]')
        .click();
    });
  });
});
