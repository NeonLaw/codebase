interface SelectAdminPersonArgs {
  client: any;
}

export const selectAdminPerson = async ({
  client
}: SelectAdminPersonArgs) => {
  const email = 'admin@sink.sendgrid.com';
  const { rows } = await client.query(
    'INSERT INTO people (email, role, sub) ' +
    'VALUES ($1, \'admin\', \'admin-sub\') '+
    'ON CONFLICT("email") DO UPDATE SET email=EXCLUDED.email RETURNING id',
    [email]
  );
  const { id } = rows[0];
  return { email, id };
};
