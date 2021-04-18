import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';
import { MattersList } from '../../components/lists/mattersList';
import { PortalLayout } from '../../components/layouts/portalLayout';
import { useIntl } from 'react-intl';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';


const PortalPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_portal.heading' })}
        </Heading>
      </Box>
      <MattersList category="all" />
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default withPageAuthRequired(PortalPage);
