import { Box, Heading, Text } from '@chakra-ui/react';
import { gutters, sizes } from '../../../styles/neonLaw';
import { MattersList } from '../../../components/lists/mattersList';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'react-intl';

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
      <MattersList category="business" basePath="/portal/business" />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalBusinessesPage;
