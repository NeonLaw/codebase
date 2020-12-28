import * as faker from 'faker';

describe('CRUD-ing a matter as an admin', () => {
  it('allows for creating, reading, and deleting a matter', () => {
    const matterTemplateName = faker.lorem.sentence();
    const matterName = faker.lorem.sentence();

    cy.createMatterTemplate(matterTemplateName);

    cy.loginAsAdminUser().then(() => {
      cy.visit('/portal/admin');

      cy.get('[data-testid="admin-matters-link-button"]').click();

      cy.url().should('include', '/admin/matters');

      cy.get('[data-testid="matters-table"]').should('exist');

      cy.contains('Create Matter').click();

      cy.get('[data-testid="create-matter-form"]')
        .should('exist');

      cy.get('[data-testid="matter-form-name"]')
        .type(matterName);

      cy.get('.react-select-matter-template-id__control')
        .click()
        .get('.react-select-matter-template-id__menu')
        .find('.react-select-matter-template-id__option')
        .first()
        .click();

      cy.get('.react-select-primary-contact-id__control')
        .click()
        .get('.react-select-primary-contact-id__menu')
        .find('.react-select-primary-contact-id__option')
        .first()
        .click();

      cy.get('[data-testid="create-matter-form-submit"]')
        .click();

      cy.get('[data-testid="create-matter-form"]')
        .should('not.exist');

      cy.get('[data-testid="matters-table"]')
        .within(() => {
          cy.contains(matterName).trigger('mouseover').click({ force: true });
        });

      cy.url().should('include', '/admin/matters/');

      cy.get('[data-testid="matters-table"]').should('not.exist');

      cy.get('[data-testid="delete-matter-button"]').click();

      cy.url().should('not.include', '/admin/matters/');
      cy.url().should('include', '/admin/matters');

      cy.get('[data-testid="matters-table"]')
        .within(() => { cy.contains(matterName).should('not.exist'); });
    });

    cy.deleteMatterTemplate(matterTemplateName);
  });
});
