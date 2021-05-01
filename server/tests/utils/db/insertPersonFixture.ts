import * as faker from 'faker';

export const insertPersonFixture = async ({ client }) => {
  const email = faker.internet.email();
  const sub = faker.datatype.uuid();

  const result = await client.query(
    'INSERT INTO people (email, sub) ' +
    'VALUES ($1, $2) RETURNING *',
    [email, sub]
  );

  return result.rows[0];
};
