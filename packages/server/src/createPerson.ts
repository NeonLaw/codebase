interface CreatePersonInterface {
  sub: string;
  email: string;
  name: string;
  role: 'portal' | 'lawyer' | 'admin';
  client: any;
}

export interface CurrentPersonInterface {
  id: string;
  role: string;
}

export const createPerson = async (
  args: CreatePersonInterface
): Promise<CurrentPersonInterface> => {
  const { client, sub, email, name, role } = args;

  const personQuery = await client.query(
    'INSERT INTO person (sub, email, name, role) ' +
    'VALUES ($1, $2, $3, $4) RETURNING id, role',
    [
      sub,
      email,
      name,
      role
    ]
  );

  return personQuery.rows[0];
};
