import * as faker from 'faker';

interface InsertDocumentTemplateFixtureArgs {
  client: any;
}

export const insertDocumentTemplateFixture = async ({
  client
}: InsertDocumentTemplateFixtureArgs) => {
  const name = faker.lorem.slug();
  const description = faker.lorem.paragraphs(2);

  const { rows } = await client.query(
    'INSERT INTO document_template (name, description) '+
    'VALUES ($1, $2) RETURNING (id)',
    [name, description]
  );

  return rows[0];
};
