import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { gutters, sizes } from '../../../themes/neonLaw';

import { PortalLayout } from '../../../layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const WriteRickiePage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.write_rickie.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.write_rickie.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default WriteRickiePage;
