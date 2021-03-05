import * as faker from 'faker';

export const insertPersonFixture = async (client: any) => {
  const email = faker.internet.email();
  const sub = faker.random.uuid();

  const result = await client.query(
    'INSERT INTO person (email, sub) ' +
    'VALUES ($1, $2) RETURNING *',
    [email, sub]
  );

  return result.rows[0];
};
