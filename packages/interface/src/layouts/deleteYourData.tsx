import '@neonlaw/shared-ui/src/themes/fonts.css';
import {
  AuthenticationContext,
  publicClient
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { ApolloProvider } from '@apollo/client';
import { DeleteYourDataStyles } from '../styles/deleteYourData';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import React from 'react';

export const DeleteYourDataLayout = ({ children }) => (
  <>
    <DeleteYourDataStyles />
    <AuthenticationContext.Consumer>
      {({ isLoading, apolloClient }) => {
        return (
          <ApolloProvider client={isLoading ? publicClient : apolloClient}>
            <>
              {children}
              <Footer isWhite={false} />
            </>
          </ApolloProvider>
        );}}
    </AuthenticationContext.Consumer>
  </>
);
