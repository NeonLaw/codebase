/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     *
     * @example cy.dataCy('greeting')
     */
    createMatterTemplate(value: string): Chainable<Element>

    deleteMatterTemplate(value: string): Chainable<Element>

    loginAsAdminUser(): Chainable<Element>

    loginAsPortalUser(): Chainable<Element>

    injectAxe(): Chainable<Element>

    checkA11y(any, any, any): Chainable<Element>

    tab(): Chainable<Element>

    getEditor(domSelector: string): Chainable<Element>

    typeInSlate(text: string): Chainable<Element>
  }
}
