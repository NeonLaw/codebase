import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import React, { Component, createContext } from 'react';
import LogRocket from 'logrocket';
import createAuth0Client from '@auth0/auth0-spa-js';
import fetch from 'isomorphic-fetch';
import { setContext } from '@apollo/client/link/context';

const link = createHttpLink({
  fetch,
  uri: process.env.GATSBY_API_URL,
  useGETForQueries: false,
});

export const publicClient = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const initialState = {
  apolloClient: publicClient,
  auth0Client: null,
  getIdTokenClaims: () => {
    return;
  },
  getTokenSilently: () => {
    return;
  },
  isAuthenticated: false,
  isLoading: true,
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
  user: null,
};

export const AuthenticationContext = createContext(initialState);

export class AuthenticationProvider extends Component {
  state = initialState;
  props: any;

  config = {
    audience: 'https://api.neonlaw.com',
    cacheLocation: 'localstorage' as const,
    client_id: process.env.GATSBY_AUTH0_CLIENT_ID as string,
    domain: process.env.GATSBY_AUTH0_DOMAIN as string,
    redirect_uri: process.env.GATSBY_AUTH0_CALLBACK,
    responseType: 'token id_token',
    scope: 'openid profile email',
  };

  componentDidMount() {
    this.initializeAuth0();
  }

  initializeAuth0 = async () => {
    const auth0Client = await createAuth0Client(this.config);
    this.setState({ auth0Client });

    if (window.location.search.includes('code=')) {
      return await this.handleCallback();
    }

    const isAuthenticated = await auth0Client.isAuthenticated();
    const user = isAuthenticated ? await auth0Client.getUser() : null;
    this.setState({ isAuthenticated, user });

    await this.updateClient();

    this.setState({ isLoading: false });
  };

  handleCallback = async () => {
    this.setState({ isLoading: true });

    try {
      await (this.state.auth0Client as any).handleRedirectCallback();
    } catch {
      (this.state.auth0Client as any).logout({
        returnTo: process.env.GATSBY_SITE_URL,
      });
    }
    const user = await (this.state.auth0Client as any).getUser();

    await this.updateClient();
    this.setState({ isAuthenticated: true, isLoading: false, user });
  };

  updateClient = async () => {
    if (!this.state.isAuthenticated) {
      return;
    }

    if (process.env.GATSBY_LOGROCKET_CREDENTIALS) {
      LogRocket.identify(
        process.env.GATSBY_LOGROCKET_CREDENTIALS,
        this.state.user || {},
      );
    }

    const authLink = setContext(async () => {
      const accessToken = await (this.state
        .auth0Client as any).getTokenSilently();

      return {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      };
    });

    const authenticatedClient = new ApolloClient({
      cache: new InMemoryCache(),
      link: authLink.concat(link),
    });

    this.setState({ apolloClient: authenticatedClient });
  };

  render() {
    const { children } = this.props;
    const {
      apolloClient,
      auth0Client,
      isAuthenticated,
      isLoading,
      user,
    } = this.state;

    const configObject = {
      apolloClient,
      auth0Client,
      getIdTokenClaims: () => (auth0Client as any).getIdTokenClaims(),
      getTokenSilently: () => (auth0Client as any).getTokenSilently(),
      isAuthenticated,
      isLoading,
      login: () => (auth0Client as any).loginWithRedirect(),
      logout: () => {
        this.setState({ apolloClient: publicClient });

        (auth0Client as any).logout({ returnTo: process.env.GATSBY_SITE_URL });
      },
      user,
    };

    return (
      <AuthenticationContext.Provider value={configObject}>
        {children}
      </AuthenticationContext.Provider>
    );
  }
}
