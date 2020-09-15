/* eslint-disable no-undef */

describe('Visiting /', () => {
  it('renderes /', () => {
    cy.visit('/');
    cy.get('h2').contains('Justice for Rickie Slaughter');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });

  it('leaflet map is rendered correctly', () => {
    cy.get('.leaflet-container');
    cy.get('.leaflet-marker-icon').click({ multiple: true });
    cy.get('.leaflet-popup-content').contains('Las Vegas');
  });
});
