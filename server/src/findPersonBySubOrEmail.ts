import { Client } from 'pg';
import { getUserFromAuth0 } from './getUserFromAuth0';
import { postgresUrl } from './postgresUrl';

export interface CurrentPersonInterface {
  id: string;
  role: string;
}


export const findPersonBySubOrEmail = async (
  sub: string
): Promise<CurrentPersonInterface> => {
  const client = new Client(postgresUrl);
  await client.connect();

  console.info(`An incoming request from sub: ${sub}`);

  const currentPersonQuery = await client.query(
    'SELECT id, role FROM people WHERE sub = $1 LIMIT 1',
    [sub]
  );
  const currentPerson = currentPersonQuery.rows[0];

  if (currentPerson) {
    await client.end();
    return {
      id: currentPerson.id,
      role: currentPerson.role,
    };
  }

  const userFromAuth0 = await getUserFromAuth0(sub);
  const { email } = userFromAuth0;

  const currentPersonByEmailQuery = await client.query(
    'SELECT id, role FROM people WHERE email = $1 LIMIT 1',
    [email]
  );
  const currentPersonByEmail = currentPersonByEmailQuery.rows[0];

  if (currentPersonByEmail) {
    await client.query(
      'UPDATE people SET sub = $1 WHERE email = $2',
      [sub, email]
    );
    await client.end();
    return {
      id: currentPersonByEmail.id,
      role: currentPersonByEmail.role,
    };
  }

  throw new Error('Person does not exist in the database');
};
