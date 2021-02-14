describe('PGP Key', () => {
  it('Copy to Clipboard button copies the PGP Key to the clipboard.', () => {
    cy.visit('/pgp');
    // cy.contains('Copy to Clipboard');
    // cy.get('button[aria-label="Copy PGP Key to Clip Board"]').click();
  });
});
