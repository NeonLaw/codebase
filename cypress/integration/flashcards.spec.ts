/* eslint-disable no-undef */

describe('Bar Prep Flashcards', () => {
  it('changes the url when a topic button is clicked', () => {
    cy.visit('/bar-prep/flashcards');
    cy.contains('Business Associations').click();
    cy.contains('Civil Procedure').click();
    cy.contains('Community Property').click();
    cy.contains('Constitutional Law').click();
    cy.contains('Contracts').click();
    cy.contains('Crimes').click();
    cy.contains('Evidence').click();
    cy.contains('Professional Responsibility').click();
    cy.contains('Real Property').click();
    cy.contains('Remedies').click();
    cy.contains('Torts').click();
    cy.contains('Wills and Trusts').click();
  });
});
