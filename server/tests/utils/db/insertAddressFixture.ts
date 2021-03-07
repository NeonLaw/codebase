import * as faker from 'faker';

interface InsertAddressFixtureArgs {
  client: any;
  personId: string;
}

export const insertAddressFixture = async ({
  client,
  personId,
}: InsertAddressFixtureArgs) => {
  const lobIdentifier = faker.random.uuid();
  const { rows } = await client.query(
    'INSERT INTO address (person_id, lob_identifier) '+
    'VALUES ($1, $2) '+
      'RETURNING *',
    [
      personId,
      lobIdentifier
    ]
  );

  return rows[0];
};
