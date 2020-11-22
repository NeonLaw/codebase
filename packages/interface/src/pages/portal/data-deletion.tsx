import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const DataDeletionPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          Data Deletion
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages_portal.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

export default DataDeletionPage;
