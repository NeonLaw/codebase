import { Box, Heading } from '@chakra-ui/core';
import { navigate, useIntl } from 'gatsby-plugin-intl';

import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

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
            navigate('/admin/flashcards');
          }}
        >
          Flashcards
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/admin/questions');
          }}
        >
          Questions
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/admin/document-templates');
          }}
        >
          Document Templates
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/admin/matter-templates');
          }}
        >
          Matter Templates
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/admin/people');
          }}
          data-testid="admin-people-link-button"
        >
          People
        </FlashButton>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/admin/matters');
          }}
          data-testid="admin-matters-link-button"
        >
          Matters
        </FlashButton>
      </Box>
    </PortalLayout>
  );
};

export default AdminDashboard;
