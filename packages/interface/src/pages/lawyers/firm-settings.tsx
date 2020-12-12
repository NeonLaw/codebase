import {
  Box,
  Heading,
} from '@chakra-ui/core';
import { PortalLayout } from '../../layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const LawyersFirmSettings = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading>
          {intl.formatMessage({ id: 'pages_lawyers.settings' })}
        </Heading>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default LawyersFirmSettings;
