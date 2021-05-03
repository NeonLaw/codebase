/* eslint-disable no-undef */

describe('Visiting /', function () {
  it('renders a link to the contact form', function () {
    cy.visit('/');
    // cy.wait(1000);
    // cy.get('button.nav-content-mobile').click();
    // cy.get('nav[aria-label="Main navigation"]').contains('Contact').click();
  });
  it('Pressing \'/\' focuses the search in the hero.', () => {
    cy.get('body').type('/').type('123');
    cy.wait(1000);
    cy.get('[data-testId="question"]');
  });
});
