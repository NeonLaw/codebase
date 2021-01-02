import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { gutters, sizes } from '../../themes/neonLaw';
import { PortalLayout } from '../../layouts/portalLayout';
import {
  PortalProfileCard
} from '../../components/cards/portalProfileCard';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const PortalPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_portal.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages_portal.text' })}
        </Text>
        <PortalProfileCard />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalPage;
