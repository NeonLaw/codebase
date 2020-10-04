/// <reference types="cypress" />

describe('Keyboard shortcuts modal', () => {
  it('renders the Keyboard shortcuts modal', () => {
    cy.visit('/');
    cy.wait(2000);
    cy.get('input').type('?');
    cy.get('.chakra-modal__header').contains('Keyboard Shortcuts');
  });
  it('closes the shortcut modal when the overlay is being clicked.', () => {
    cy.wait(2000);
    cy.get('.chakra-modal__overlay').click(50, 50);
  });
});
