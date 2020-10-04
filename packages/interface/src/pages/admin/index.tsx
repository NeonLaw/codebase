import { Box, Heading, Text } from '@chakra-ui/core';
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

        <Text marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_admin.text' })}
        </Text>

        <FlashButton
          colorScheme="gray"
          onClick={() => {
            navigate('/admin/flashcards');
          }}
        >
          Flashcards
        </FlashButton>
      </Box>
    </PortalLayout>
  );
};

export default AdminDashboard;
