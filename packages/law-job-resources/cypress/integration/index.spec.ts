/* eslint-disable no-undef */

describe('All the pages are rendered.', () => {
  it('renders /', () => {
    cy.visit('/');
    cy.get('h2').contains('Law Job Resources');
    cy.get('[data-cy="edit-on-github"]').should('be.visible');
  });

  it('renders /hone-your-legal-skills', () => {
    cy.visit('/hone-your-legal-skills');
    cy.get('h2').contains('new skills');
  });

  it('renders /preparing-your-application-and-networking', () => {
    cy.visit('/preparing-your-application-and-networking');
    cy.get('h2').contains('Networking and Job Opportunities');
  });

  it('renders /internships', () => {
    cy.visit('/internships');
    cy.get('h2').contains('Interships');
  });

  it('renders /legal-job-leads', () => {
    cy.visit('/legal-job-leads');
    cy.get('h2').contains('Legal Job Leads');
  });

  it('renders /pure-advice', () => {
    cy.visit('/pure-advice');
    cy.get('h2').contains('Pure Advice');
  });
});
