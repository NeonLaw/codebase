import { Box, Heading } from '@chakra-ui/core';
import { navigate, useIntl } from 'gatsby-plugin-intl';

import { FlashButton } from '../../../components/button';
import { PortalLayout } from '../../../layouts/portalLayout';
import React from 'react';
import { gutters } from '../../../themes/neonLaw';

const AdminDashboard = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_admin.heading' })}
        </Heading>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/flashcards');
          }}
        >
          Flashcards
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/questions');
          }}
        >
          Questions
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/document-templates');
          }}
        >
          Document Templates
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/matter-templates');
          }}
        >
          Matter Templates
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/people');
          }}
          data-testid="admin-people-link-button"
        >
          People
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/portal/admin/matters');
          }}
          data-testid="admin-matters-link-button"
        >
          Matters
        </FlashButton>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AdminDashboard;
