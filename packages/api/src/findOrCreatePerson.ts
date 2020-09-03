import { CurrentPersonInterface, createPerson } from './createPerson';
import { Client } from 'pg';
import { getUserFromAuth0 } from './getUserFromAuth0';
import { postgresUrl } from './postgresUrl';

export const findOrCreatePerson = async (
  sub: string
): Promise<CurrentPersonInterface> => {
  const client = new Client(postgresUrl);
  await client.connect();

  console.info(`An incoming request from sub: ${sub}`);

  const currentPersonQuery = await client.query(
    'SELECT id, role FROM person WHERE sub = $1 LIMIT 1',
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

  const { id, role } = await createPerson({
    client,
    email: userFromAuth0.email,
    name: userFromAuth0.name,
    role: userFromAuth0.role,
    sub: userFromAuth0.sub,
  });

  await client.end();
  return {
    id,
    role
  };
};
