import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';
import {
  DataDeletionDashborard
} from '../../components/dashboards/dataDeletionDashboard';
import { PortalLayout } from '../../components/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'react-intl';

const DataDeletionPage = () => {
  const intl = useIntl();

  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.data_deletion.heading' })}
        </Heading>
      </Box>
      <DataDeletionDashborard />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default DataDeletionPage;
