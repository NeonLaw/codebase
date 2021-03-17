import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import { gutters, sizes } from '../../../../styles/neonLaw';
import {
  BusinessMatterDetailView
} from '../../../../components/detailViews/businessMatterDetailView';
import {
  BusinessMattersList
} from '../../../../components/lists/businessMattersList';
import { PortalLayout } from '../../../../components/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'react-intl';

/* eslint-disable @typescript-eslint/no-unused-vars */
const BusinessMatterListView = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();
  return (
    <>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.business.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.business.text' })}
        </Text>
      </Box>
      <BusinessMattersList />
    </>
  );
};

const PortalBusinessesPage = () => {
  return (
    <PortalLayout>
      <BusinessMatterDetailView path=":matterId" />
      <BusinessMatterListView path="/" />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default PortalBusinessesPage;
