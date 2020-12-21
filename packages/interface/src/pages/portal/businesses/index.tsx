import { Box, Heading, Text } from '@chakra-ui/core';
import { gutters, sizes } from '../../../themes/neonLaw';
/* eslint-disable-next-line max-len */
import { BusinessMattersList } from '../../../components/lists/businessMattersList';
import { PortalLayout } from '../../../layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const PortalBusinessesPage = () => {
  const intl = useIntl();

  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.business.heading' })}
        </Heading>
        <Text>{intl.formatMessage({ id: 'pages.business.text' })}</Text>
      </Box>
      <BusinessMattersList />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalBusinessesPage;
