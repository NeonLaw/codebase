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

  const currentPersonQuery = await client.query(
    'SELECT id, role FROM person WHERE sub = $1 LIMIT 1',
    [sub]
  );
  const currentPerson = currentPersonQuery.rows[0];

  if (currentPerson) {
    await client.end();
    return currentPerson;
  }

  const currentPersonByEmailQuery = await client.query(
    'SELECT id, role FROM person WHERE email = $1 LIMIT 1',
    [email]
  );
  const currentPersonByEmail = currentPersonByEmailQuery.rows[0];

  if (currentPersonByEmail) {
    await client.query(
      `UPDATE person SET sub = '${sub}' WHERE email = '${email}'`
    );
    await client.end();
    return currentPersonByEmail;
  }

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
