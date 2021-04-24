import * as faker from 'faker';

interface InsertMatterTemplateFixtureArgs {
  client: any;
}

export const insertMatterTemplateFixture = async ({
  client
}: InsertMatterTemplateFixtureArgs) => {
  const uuid = faker.datatype.uuid();

  const { rows } = await client.query(
    'INSERT INTO matter_template (name, description) '+
    'VALUES ($1, $2) RETURNING (id)',
    [`delete-your-data-${uuid}`, '{ deleteYourData: "deleteYourData"}']
  );

  return rows[0];
};
