/* eslint-disable no-undef */

describe('Visiting /', () => {
  it('renderes /', () => {
    cy.visit('/');
    cy.get('h2').contains('Delete Your Data');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});
