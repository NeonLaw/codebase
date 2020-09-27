/* eslint-disable no-undef */

describe('Bar Prep Flashcards', () => {
  it('changes the url when a topic button is clicked', () => {
    cy.visit('/bar-prep/flashcards');

    cy.wait(1000);

    cy.get('[data-testid="flashcards-heading"]').
      should('have.text', 'Bar Prep Flashcards');
  });
});
