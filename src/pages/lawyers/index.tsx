import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { PortalLayout } from '@layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const LawyersPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading>
          {intl.formatMessage({ id: 'pages_lawyers.heading' })}
        </Heading>

        <Text>
          {intl.formatMessage({ id: 'pages_lawyers.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

export default LawyersPage;
