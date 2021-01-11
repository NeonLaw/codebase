import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { gutters, sizes } from '../../themes/neonLaw';
import { PortalLayout } from '../../layouts/portalLayout';
import React from 'react';
import { Router } from '@reach/router';
import { useIntl } from 'gatsby-plugin-intl';

/* eslint-disable @typescript-eslint/no-unused-vars */
const BarPrepIndexPage = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.bar_prep.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.bar_prep.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

const BarPrepRouter = () => {
  return (
    <PortalLayout>
      <Router basepath="/upward-mobility">
        <BarPrepIndexPage path="/" />
      </Router>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default BarPrepRouter;
