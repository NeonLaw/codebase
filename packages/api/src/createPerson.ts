interface CreatePersonInterface {
  sub: string;
  email: string;
  role: string;
  name: string;
  client: any;
}

export interface CurrentPersonInterface {
  id: string;
  role: string;
}

export const createPerson = async (
  args: CreatePersonInterface
): Promise<CurrentPersonInterface> => {
  const { client, sub, email, role, name } = args;

  const personQuery = await client.query(
    'INSERT INTO person (sub, email, role, name) ' +
    'VALUES ($1, $2, $3, $4) RETURNING id, role',
    [
      sub,
      email,
      role,
      name
    ]
  );

  return personQuery.rows[0];
};
