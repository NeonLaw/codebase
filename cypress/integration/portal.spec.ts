/// <references types="Cypress" />
/* eslint-disable no-undef */

import faker from 'faker';

describe('Visiting /portal', () => {
  context('as an anonymous user', () => {
    it('redirects the user back to the home screen', () => {
      cy.visit('/portal');
      cy.url().should('not.include', '/portal');
    });
  });
  context('logged in as a portal user', () => {
    it('renders the /portal pages and the user can change ther name', () => {
      const name = faker.name.findName();

      cy.loginAsPortalUser().then(() => {
        cy.visit('/portal');
        cy.contains('Profile').click();
        cy.url().should('include', '/portal/profile');
        cy.get('[data-testid="portal-profile-form-name"]').type(name);

        // wait for currentUser to populate form TODO - remove this
        cy.wait(5000);

        cy.get('[data-testid="portal-profile-form-submit"]').click();

        cy.get('[data-testid="portal-profile-form-name"]').
          invoke('val').
          should('not.contain', name);
        cy.get('[data-testid="portal-profile-card-name"]').
          should('contain', name);
      });
    });
  });
});
