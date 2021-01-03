import { LoadingPage } from '../components/loadingPage';
import { PublicLayout } from '../layouts/publicLayout';
import React from 'react';
import { Redirect } from '@reach/router';
import { useAuth0 } from '@auth0/auth0-react';

const Callback = () => {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <PublicLayout>
        <LoadingPage />
      </PublicLayout>
    );
  }

  if (isAuthenticated) {
    return <Redirect to="/portal" />;
  }

  return <Redirect noThrow={true} to="/" />;
};

/* eslint-disable-next-line import/no-default-export */
export default Callback;
