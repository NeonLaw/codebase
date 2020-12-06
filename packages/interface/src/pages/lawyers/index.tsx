import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';

import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';
import { useIntl } from 'gatsby-plugin-intl';

const LawyersPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_lawyers.heading' })}
        </Heading>

        <Text>
          {intl.formatMessage({ id: 'pages_lawyers.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default LawyersPage;
