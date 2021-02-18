import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import fetch from 'isomorphic-fetch';

export const getApolloClient = () => {
  const uri = process.env.NEXT_PUBLIC_API_URI;

  const link = createHttpLink({
    fetch,
    uri,
    useGETForQueries: false,
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
};
