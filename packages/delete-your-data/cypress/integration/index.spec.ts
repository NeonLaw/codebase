/* eslint-disable no-undef */

describe('Visiting /', () => {
  it('renderes /', () => {
    cy.visit('/');
    cy.get('h1').contains('Delete Your Data');
  });
});
