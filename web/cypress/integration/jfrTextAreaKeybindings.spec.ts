/// <reference types="cypress" />

describe('Keybindings work for Textarea', () => {
  it('Copying to the clip board works', () => {
    cy.visit('/justice-for-rickie-slaughter/write-rickie');
    cy.get('[data-slate-string]').type('{selectall}');
    cy.get('[data-slate-string]').type('{cmd}c');
  });
});