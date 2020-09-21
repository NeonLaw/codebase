/* eslint-disable no-undef */
// <reference types="cypress" / >

describe('Verify that availabe Keyboard Shortcuts work', () => {
  it('c brings up the `CreateFlashcard` modal on /admin/flashcards', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/flashcards');
      cy.wait(2000);
      cy.get('body').contains('Flashcards');
      cy.get('input[version="desktop"]').type('c');
      cy.get('[data-testid="create-flashcard-modal"]')
        .should('exist');
    });
  });
});
