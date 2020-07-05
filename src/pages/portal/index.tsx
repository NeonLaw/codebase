import {
  Heading,
  Text,
} from '@chakra-ui/core';
import { PortalLayout } from '@layouts/portalLayout';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const PortalPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Heading textAlign="center" marginBottom="20px">
        {intl.formatMessage({ id: 'pages_portal.heading' })}
      </Heading>


      <Text>
        {intl.formatMessage({ id: 'pages_portal.text' })}
      </Text>
    </PortalLayout>
  );
};

export default PortalPage;
