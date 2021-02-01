describe('Skip Navigation', () => {
  it('the user jump to the main content', () => {
    cy.loginAsAdminUser().then(() => {
        cy.visit()
    });
  });
});
