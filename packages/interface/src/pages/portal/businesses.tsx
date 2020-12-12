import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { gutters, sizes } from '../../themes/neonLaw';
import {
  BusinessMatterDetailView
} from '../../components/detailViews/businessMatterDetailView';
import {
  BusinessMattersList
} from '../../components/lists/businessMattersList';
import { PortalLayout } from '../../layouts/portalLayout';
import React from 'react';
import { Router } from '@reach/router';
import { useIntl } from 'gatsby-plugin-intl';

/* eslint-disable @typescript-eslint/no-unused-vars */
const BusinessMatterListView = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.business.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.business.text' })}
        </Text>
      </Box>
      <BusinessMattersList />
    </PortalLayout>
  );
};

const PortalBusinessesPage = () => {
  return (
    <PortalLayout>
      <Router basepath="/portal/businesses">
        <BusinessMatterDetailView path=":matterId" />
        <BusinessMatterListView path="/" />
      </Router>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalBusinessesPage;
