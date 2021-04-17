import { getSession } from '@auth0/nextjs-auth0';

const session = (req, res) => {
  const session = getSession(req, res);
  res.send(session);
  return;
};

// eslint-disable-next-line import/no-default-export
export default session;
