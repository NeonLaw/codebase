import { Breadcrumbs } from '../../components/breadcrumbs';
import { PublicTrustLayout } from '../../layouts/publicTrustLayout';
import React from 'react';
import { Seo } from '../../components/seo';

const HomePage = () => {
  const title = 'Public Trusts';
  const description = 'Trust Websites managed by Neon Law.';

  return (
    <PublicTrustLayout>
      <Breadcrumbs />
      <Seo title={title} description={description} />
      Public Trusts
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default HomePage;
