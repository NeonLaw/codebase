/* eslint-disable no-undef */

describe('CRUDDing Bar Prep Flashcards', () => {
  it('creates a flashcard and adds that to the flashcard table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/flashcards');

      cy.contains('Create Flashcard').click();

      cy.get('#create-flashcard-modal').should('exist');

      cy
        .get('[data-testid="create-flashcard-modal-prompt"]')
        .type('A question');

      cy
        .get('[data-testid="create-flashcard-modal-answer"]')
        .type('An answer');

      cy
        .get('[data-testid="create-flashcard-modal-submit"]')
        .click();

      cy
        .get('[data-testid="create-flashcard-modal-submit"]')
        .click();

      cy.get('#create-flashcard-modal').should('not.exist');
    });
  });
});
