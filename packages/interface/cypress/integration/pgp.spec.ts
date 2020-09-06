/* eslint-disable no-undef */

// This spec is in-complete as currently there is no way to call
// the paste command in cypress.
// See: https://github.com/cypress-io/cypress/issues/2851

describe('PGP Key', () => {
  it('Copy to Clipboard button copies the PGP Key to the clipboard.', () => {
    cy.visit('/pgp');
    cy.contains('Copy to Clipboard');
    cy.get('button[aria-label="Copy PGP Key to Clip Board"]').click();
  });
});
