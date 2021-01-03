import { LoadingPage } from '../components/loadingPage';
import { PublicLayout } from '../layouts/publicLayout';
import React from 'react';
import { navigate } from 'gatsby';
import { useAuth0 } from '@auth0/auth0-react';

const Callback = () => {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  if (isLoading) {
    return (
      <PublicLayout>
        <LoadingPage />
      </PublicLayout>
    );
  }

  if (isAuthenticated) {
    navigate('/portal');
    return null;
  }

  logout();
  return null;
};

/* eslint-disable-next-line import/no-default-export */
export default Callback;
