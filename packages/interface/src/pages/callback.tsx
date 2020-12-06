import {
  AuthenticationContext
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { LoadingPage } from '@neonlaw/shared-ui/src/components/loadingPage';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { navigate } from 'gatsby';

const Callback = () => {
  return (
    <PublicLayout>
      <AuthenticationContext.Consumer>
        {({ isLoading, isAuthenticated, logout }) => {
          if (isLoading) {
            return <LoadingPage />;
          }
          if (isAuthenticated) {
            navigate('/portal');
            return null;
          }

          logout();
          return null;
        }}
      </AuthenticationContext.Consumer>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default Callback;
