import { Breadcrumbs } from '../../../components/breadcrumbs';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import React from 'react';
import { Seo } from '../../../components/seo';

const HomePage = () => {
  const title = 'Shook Family Trust';
  const description = 'The Shook Family Trust managed by Neon Law.';

  return (
    <PublicTrustLayout>
      <Breadcrumbs />
      <Seo title={title} description={description} />
      Shook Family
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default HomePage;
