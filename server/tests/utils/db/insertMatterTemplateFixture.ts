import * as faker from 'faker';

export const insertMatterTemplateFixture = async (
  client: any,
) => {
  const uuid = faker.random.uuid();

  const { rows } = await client.query(
    'INSERT INTO matter_template (name, javascript_module) '+
    'VALUES ($1, $2) RETURNING (id)',
    [`delete-your-data-${uuid}`, `deleteYourData-${uuid}`]
  );

  return rows[0];
};
