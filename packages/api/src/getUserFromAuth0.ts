import { admins } from './admins';
import axios from 'axios';
import { lawyers } from './lawyers';

export const getUserFromAuth0 = async (sub: string) => {
  const apiUrl = `https://${process.env.AUTH0_TENANT}/api/v2/users`;
  const apiTokenUrl = `https://${process.env.AUTH0_TENANT}/oauth/token`;
  const bodyParams = {
    'audience': `https://${process.env.AUTH0_TENANT}/api/v2/`,
    'client_id': process.env.AUTH0_CLIENT_ID,
    'client_secret': process.env.AUTH0_CLIENT_SECRET,
    'grant_type': 'client_credentials',
  };

  const serverAccessToken = await axios.post(apiTokenUrl, bodyParams).
    then(({ data }) => {
      return data['access_token'];
    }).catch((error) => {
      throw new Error(`There was an error: ${error}`);
    });

  return await axios.get(`${apiUrl}/${sub}`, {
    headers: {
      'authorization': `bearer ${serverAccessToken}`,
      'content-type': 'application/json',
    }
  }).then(({ data }) => {
    const connection = data.identities[0].connection;
    const { email, name } = data;

    let role;
    if (lawyers.includes(email)) {
      role = 'lawyer';
    } else if (admins.includes(email)) {
      role = 'admin';
    } else {
      role = 'portal';
    }

    const currentContext = {
      connection,
      email,
      name,
      role,
      sub: data.user_id,
    };

    return currentContext;
  }).catch((error) => {
    throw new Error(`There was an error: ${error}`);
  });
};
