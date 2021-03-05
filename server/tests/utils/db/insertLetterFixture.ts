import * as faker from 'faker';

interface InsertLetterFixtureArgs {
  client: any;
  addresseeId: string;
  addressorId: string;
}

export const insertLetterFixture = async ({
  client,
  addresseeId,
  addressorId,
}: InsertLetterFixtureArgs) => {
  const body = { paragraph: faker.lorem.paragraph() };

  const { rows } = await client.query(
    'INSERT INTO letter (body, addressor_id, addressee_id) '+
    'VALUES ($1, $2, $3) '+
      'RETURNING (id, body, addressor_id, addressee_id)',
    [
      JSON.stringify(body),
      addresseeId,
      addressorId
    ]
  );

  return rows[0].row;
};
