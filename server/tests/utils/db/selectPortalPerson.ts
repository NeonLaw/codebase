interface SelectPortalPersonArgs {
  client: any;
}

export const selectPortalPerson = async ({
  client
}: SelectPortalPersonArgs) => {
  const email = 'portal@sink.sendgrid.com';
  const { rows } = await client.query(
    'INSERT INTO person (email, role, sub) ' +
    'VALUES ($1, \'portal\', \'portal-sub\') '+
    'ON CONFLICT("email") DO UPDATE SET email=EXCLUDED.email RETURNING id',
    [email]
  );
  const { id } = rows[0];
  return { email, id };
};
