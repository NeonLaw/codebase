import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const AuditsPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.audits.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.audits.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default AuditsPage;
