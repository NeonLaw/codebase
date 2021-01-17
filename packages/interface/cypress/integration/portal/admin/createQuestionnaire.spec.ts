import * as faker from 'faker';

describe('Creating Questionnaires', () => {
  it('creates a questionnaire and adds that to the questionnaire table', () => {
    const matterTemplateName = faker.lorem.sentence();
    cy.createMatterTemplate(matterTemplateName);

    cy.loginAsAdminUser().then(() => {
      cy.visit('/portal/admin/questionnaires');

      cy.contains('Create Questionnaire').click();

      cy.get('[data-testid="create-questionnaire-form"]')
        .should('exist');

      cy
        .get('[data-testid="questionnaire-form-name"]')
        .type(faker.lorem.sentence());

      cy
        .get('[data-testid="questionnaire-form-name"]')
        .type(faker.lorem.sentence());

      cy.get('.react-select-matter-template-id__control')
        .click()
        .get('.react-select-matter-template-id__menu')
        .find('.react-select-matter-template-id__option')
        .first()
        .click();

      cy.get('[data-testid="create-questionnaire-form-submit"]')
        .click();

      cy.get('[data-testid="create-questionnaire-modal"]')
        .should('not.exist');
    });
  });
});
