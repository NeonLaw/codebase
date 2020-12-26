/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     *
     * @example cy.dataCy('greeting')
     */
    createMatterTemplate(value: string): Chainable<Element>

    loginAsAdminUser(): Chainable<Element>

    loginAsPortalUser(): Chainable<Element>
  }
}
