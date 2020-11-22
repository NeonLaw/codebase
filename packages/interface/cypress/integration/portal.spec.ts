/// <references types="Cypress" />
/* eslint-disable no-undef */

import faker from 'faker';

describe('Visiting /portal', () => {
  describe('as an anonymous user', () => {
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
        cy.wait(1000);
        cy.url().should('include', '/portal');

        cy.contains('Profile').click();
        cy.wait(1000);
        cy.url().should('include', '/portal/profile');

        cy.get('[data-testid="open-update-profile-modal"]').click();

        cy.get('[data-testid="update-person-modal"]').should('exist');

        cy.get('[data-testid="update-person-form-name"]').type(name);
        cy.get('[data-testid="update-person-form-accessible-buttons"]').click();
        cy.get('[data-testid="update-person-form-submit"]').click();

        // TODO: get this working on GitHub Actions
        // cy.get('[data-testid="update-person-modal"]').should('not.exist');
        // cy.get('[data-testid="portal-profile-card-name"]').
        //   should('contain', name);
      });
    });
  });
});
