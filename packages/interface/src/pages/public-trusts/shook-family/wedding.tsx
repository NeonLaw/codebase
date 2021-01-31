import { Breadcrumbs } from '../../../components/breadcrumbs';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import React from 'react';
import { Seo } from '../../../components/seo';

const ShookFamilyWeddingPage = () => {
  const title = 'Shook Family Wedding';
  const description = 'The Shook Family Wedding February 1, 2021';

  return (
    <PublicTrustLayout>
      <Breadcrumbs />
      <Seo title={title} description={description} />
      Shook Family Wedding
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyWeddingPage;
