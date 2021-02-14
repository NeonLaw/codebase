import { Box } from '@chakra-ui/react';
import { Link } from '../../../components/link';
import { PublicTrustLayout } from '../../../layouts/publicTrustLayout';
import React from 'react';
import { Seo } from '../../../components/seo';

const ShookFamilyIndexPage = () => {
  const title = 'Shook Family Trust';
  const description = 'The Shook Family Trust managed by Neon Law.';

  return (
    <PublicTrustLayout>
      <Seo title={title} description={description} />
      <Box textDecoration="underline">
        <Link to="/public-trusts/shook-family/wedding">
        Shook Family Wedding, February 1, 2021
        </Link>
      </Box>
    </PublicTrustLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default ShookFamilyIndexPage;
