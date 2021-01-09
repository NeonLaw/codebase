import * as faker from 'faker';

describe(
  'Creating a Bar Prep Flashcard, answering it, editing it, then deleting it',
  () => {
    it('creates a flashcard and adds that to the flashcard table', () => {
      const prompt = faker.lorem.sentence();

      cy.loginAsAdminUser().then(() => {
        cy.visit('/portal/admin/flashcards');

        cy.contains('Create Flashcard').click();

        cy.get('[data-testid="create-flashcard-form"]')
          .should('exist');

        cy
          .get('[data-testid="flashcard-form-prompt"]')
          .type(prompt);

        cy.getEditor('[data-testid="flashcard-form-answer"]')
          .typeInSlate(faker.lorem.paragraph());

        cy
          .get('[data-testid="create-flashcard-form-submit"]')
          .click();

        cy.get('[data-testid="create-flashcard-form"]')
          .should('not.exist');
      });

      cy.wait(1000);

      cy.visit('/bar-prep/flashcards');

      cy.getEditor('[data-testid="flashcard-textarea"]')
        .typeInSlate(faker.lorem.paragraph());

      cy
        .get('[data-testid="flashcard-form-submit"]')
        .click();

      cy.get('[data-testid="flashcard-form-submit"]')
        .should('not.exist');

      cy.loginAsAdminUser().then(() => {
        cy.visit('/portal/admin/flashcards');
        cy.get('[data-testid="flashcards-table"]')
          .within(() => {
            cy.contains(prompt).trigger('mouseover').click({ force: true });
          });

        cy.get('[data-testid="update-flashcard-form"]')
          .should('exist');

        cy.get('[data-testid="delete-flashcard-button"]')
          .click();

        cy.get('[data-testid="update-flashcard-form"]')
          .should('not.exist');


        cy.get('[data-testid="flashcards-table"]')
          .within(() => { cy.contains(prompt).should('not.exist'); });
      });
    });
  }
);
