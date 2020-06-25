/* eslint-disable no-undef */

describe('Visiting /', function () {
  it('renders a link to the contact form', function () {
    cy.visit('/');
    cy.contains('Contact').click();
  });
});
