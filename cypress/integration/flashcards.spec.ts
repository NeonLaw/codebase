/* eslint-disable no-undef */

describe('Bar Prep Flashcards', () => {
  it('changes the url when a topic button is clicked', () => {
    cy.visit('/bar-prep/flashcards');

    cy.contains('Business Associations').click();
    cy.url().should(
      'include',
      '/bar-prep/flashcards?topic=business-associations'
    );

    cy.contains('Civil Procedure').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=civil-procedure');

    cy.contains('Community Property').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=community-property');

    cy.contains('Constitutional Law').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=constitutional-law');

    cy.contains('Contracts').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=contracts');

    cy.contains('Crimes').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=crimes');

    cy.contains('Evidence').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=evidence');

    cy.contains('Professional Responsibility').click();
    cy.url().should(
      'include',
      '/bar-prep/flashcards?topic=professional-responsibility'
    );

    cy.contains('Real Property').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=real-property');

    cy.contains('Remedies').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=remedies');

    cy.contains('Torts').click();
    cy.url().should('include', '/bar-prep/flashcards?topic=torts');

    cy.contains('Wills and Trusts').click();

    cy.url().should('include', '/bar-prep/flashcards?topic=wills-and-trusts');
  });
});
