import { Client } from 'pg';
import { postgresUrl } from './postgresUrl';
interface CreatePersonInterface {
  sub: string;
  email: string;
}

interface Person {
  id: string;
  email: string;
  sub: string;
  createdAt: string;
}

export const createPerson = async (
  args: CreatePersonInterface
): Promise<Person> => {
  const client = new Client(postgresUrl);
  await client.connect();

  const { sub, email } = args;

  const personQuery = await client.query(
    'INSERT INTO person (sub, email) ' +
    'VALUES ($1, $2) RETURNING id, email, sub, created_at',
    [
      sub,
      email
    ]
  );

  return personQuery.rows[0];
};
