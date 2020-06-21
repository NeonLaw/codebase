/* eslint-disable no-undef */

describe('CIDR blocks blog page', () => {
  it('has an edit button that loads the edit page on GitHub', () => {
    cy.visit('/blog/cir-blocks');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});
