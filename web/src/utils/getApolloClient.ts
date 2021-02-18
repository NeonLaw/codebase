import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'isomorphic-fetch';
import { setContext } from '@apollo/client/link/context';

export const getApolloClient = () => {
  const authLink = setContext(async (_, { headers }) => {
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

  const uri = process.env.NEXT_PUBLIC_API_URI;

  const httpLink = createHttpLink({
    fetch,
    uri,
    useGETForQueries: false,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
};
