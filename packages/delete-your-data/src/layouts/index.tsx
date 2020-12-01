import '@neonlaw/shared-ui/src/themes/fonts.css';
import {
  AuthenticationContext,
  publicClient
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { ApolloProvider } from '@apollo/client';
import { BaseStyles } from '../styles/base';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import React from 'react';

const IndexLayout = ({ children }) => (
  <>
    <BaseStyles />
    <AuthenticationContext.Consumer>
      {({ isLoading, apolloClient }) => {
        return (
          <ApolloProvider client={isLoading ? publicClient : apolloClient}>
            <>
              {children}
              <Footer isWhite={false} currentSite="delete-your-data" />
            </>
          </ApolloProvider>
        );}}
    </AuthenticationContext.Consumer>
  </>
);

export default IndexLayout;
