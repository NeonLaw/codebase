import { Breadcrumbs } from '../../../components/breadcrumbs';
import { Link } from '../../../components/link';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import React from 'react';
import { Seo } from '../../../components/seo';

const ShookFamilyIndexPage = () => {
  const title = 'Shook Family Trust';
  const description = 'The Shook Family Trust managed by Neon Law.';

  return (
    <PublicTrustLayout>
      <Breadcrumbs />
      <Seo title={title} description={description} />
      Shook Family
      <Link to="/public-trusts/shook-family/wedding">
        Shook Family Wedding, February 1, 2021
      </Link>
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyIndexPage;
