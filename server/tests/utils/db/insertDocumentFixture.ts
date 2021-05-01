import * as faker from 'faker';

interface InsertDocumentFixtureArgs {
  client: any;
  documentTemplateId: string;
}

export const insertDocumentFixture = async ({
  client,
  documentTemplateId
}: InsertDocumentFixtureArgs) => {
  const uuid = faker.datatype.uuid();
  const gcpUrl =
    'https://neon-law-staging-private-assets.storage.googleapis.com/'+
    `matters/${uuid}/${uuid}.txt`;

  const { rows } = await client.query(
    'INSERT INTO documents '+
    '(filename, documentable_table_name, document_template_id, gcp_url) '+
    'VALUES ($1, $2, $3, $4) RETURNING (id)',
    [
      `matters/${uuid}/${uuid}.txt`,
      'matter_document',
      documentTemplateId,
      gcpUrl
    ]
  );

  return rows[0];
};
