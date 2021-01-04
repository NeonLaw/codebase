import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'isomorphic-fetch';
import { setContext } from '@apollo/client/link/context';

export const getApolloClient = (
  getAccessTokenSilently: (
    options?: any | undefined
  ) => Promise<string>
) => {
  const authLink = setContext(async (_, { headers }) => {
    const token = await getAccessTokenSilently();
    if (!token) {
      return { headers };
    }
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`,
      },
    };
  });

  const httpLink = createHttpLink({
    fetch,
    uri: process.env.GATSBY_API_URL,
    useGETForQueries: false,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};
