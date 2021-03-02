import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'isomorphic-fetch';
import { setContext } from '@apollo/client/link/context';

export const getApolloClient = () => {
  const uri = process.env.NEXT_PUBLIC_API_URI;

  const httpLink = createHttpLink({
    fetch,
    uri,
    useGETForQueries: false,
  });

  const authLink = setContext(async (_, { headers }) => {
    const accessTokenResponse = await fetch('/api/auth/token');
    const { accessToken } = await accessTokenResponse.json();

    if (accessToken) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${accessToken}`,
        },
      };
    }
    return { headers };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};
