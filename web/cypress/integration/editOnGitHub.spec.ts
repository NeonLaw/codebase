/* eslint-disable no-undef */

describe('Edit on github page', () => {
  it('has an edit button that loads the mdx page on GitHub', () => {
    cy.visit('/blog/cidr-blocks');
    cy.get('[data-cy="edit-on-github"]')
      .invoke('attr', 'href')
      .should('contain', 'web/src/pages/');
  });
});
