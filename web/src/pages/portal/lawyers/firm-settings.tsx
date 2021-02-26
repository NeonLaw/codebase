import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'react-intl';

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
