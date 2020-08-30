/* eslint-disable no-undef */

describe('CRUDDing Bar Prep Flashcards', () => {
  it('adds the flashcard to the flashcard table', () => {
    cy.loginAsAdminUser().then(() => {
      cy.visit('/admin/flashcards');
    });
  });
});
