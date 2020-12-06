import { Box, Heading } from '@chakra-ui/core';
import { gutters, sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
import React from 'react';

const PortalPage = () => {
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          Contact us to get started today!
        </Heading>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalPage;
