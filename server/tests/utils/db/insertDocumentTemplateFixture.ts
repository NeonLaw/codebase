import * as faker from 'faker';

interface InsertDocumentTemplateFixtureArgs {
  client: any;
}

export const insertDocumentTemplateFixture = async ({
  client
}: InsertDocumentTemplateFixtureArgs) => {
  const name = faker.lorem.slug();
  const abbreviation = faker.lorem.word();
  const jurisdiction = faker.lorem.word();
  const description = faker.lorem.paragraphs(2);

  const { rows } = await client.query(
    'INSERT INTO document_templates '+
    '(name, description, jurisdiction, abbreviation) '+
    'VALUES ($1, $2, $3, $4) RETURNING (id)',
    [name, description, abbreviation, jurisdiction]
  );

  return rows[0];
};
