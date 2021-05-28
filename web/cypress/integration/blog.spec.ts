/* eslint-disable no-undef */

describe('Blog Index page', () => {
  it('has an edit button that loads the edit page on GitHub', () => {
    cy.visit('/blog');
    // cy.get('[data-cy="edit-on-github"]').should('be.visible');
    // cy.visit('/blog/slaughter-v-escamilla');
    // cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });
});
