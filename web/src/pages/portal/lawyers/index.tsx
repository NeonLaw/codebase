import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import { gutters } from '../../../styles/neonLaw';
import { useIntl } from 'react-intl';

const LawyersPage = () => {
  const intl = useIntl();
  return (
    <PortalLayout>
      <Box>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages_lawyers.heading' })}
        </Heading>

        <Text>
          {intl.formatMessage({ id: 'pages_lawyers.text' })}
        </Text>
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default LawyersPage;
