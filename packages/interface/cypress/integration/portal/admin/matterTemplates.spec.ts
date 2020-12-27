import * as faker from 'faker';

describe('CRUDding Matter Templates', () => {
  it(
    'creates a matter template, adds that to the matter template table, '+
    'and optionally allows for updating it',
    () => {
      const matterTemplateName = faker.lorem.sentence();

      cy.createMatterTemplate(matterTemplateName);

      cy.deleteMatterTemplate(matterTemplateName);
    }
  );
});
