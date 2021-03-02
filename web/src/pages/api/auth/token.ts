
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

/* eslint-disable-next-line */
export default withApiAuthRequired(async (req, res) => {
  const { accessToken } = await getAccessToken(req, res);
  res.status(200).json({ accessToken });
});
