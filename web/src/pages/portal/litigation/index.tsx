import { Box, Heading, Text } from '@chakra-ui/react';
import { gutters, sizes } from '../../../styles/neonLaw';
import { MattersList } from '../../../components/lists/mattersList';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import React from 'react';
import { useIntl } from 'react-intl';

const LitigationIndexPage = () => {
  const intl = useIntl();

  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.litigation.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.litigation.text' })}
        </Text>
      </Box>
      <MattersList category="litigation" />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default LitigationIndexPage;
