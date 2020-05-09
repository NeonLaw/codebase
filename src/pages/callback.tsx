import { AuthenticationContext } from '@utils/authenticationContext';
import { LoadingPage } from '@components/loadingPage';
import { PublicLayout } from '@layouts/public';
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

export default Callback;
