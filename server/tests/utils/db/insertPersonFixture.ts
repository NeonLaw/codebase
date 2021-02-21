import * as faker from 'faker';

export const insertPersonFixture = async (client: any) => {
  const email = faker.internet.email();

  const { rows } = await client.query(
    'INSERT INTO person (email, sub) ' +
    'VALUES ($1, $2) RETURNING (id, email, role)',
    [email, 'a-sub-from-auth-0']
  );

  return rows[0];
};
