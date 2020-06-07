/// <reference types="cypress" />
/* eslint-disable no-undef */

describe('Visiting /portal', function () {
  it('renders the profile is a user is logged in', function () {
    cy.loginAsPortalUser().then(() => {
      cy.visit('http://localhost:8000/portal');
      cy.contains('Profile').click();
      cy.url().should('include', '/portal/profile');
    });
  });
});
