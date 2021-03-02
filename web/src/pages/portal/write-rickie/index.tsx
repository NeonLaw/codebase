import { Box, Heading, Text } from '@chakra-ui/react';
import { gutters, sizes } from '../../../styles/neonLaw';
import { CreateLetterForm } from '../../../components/forms/createLetterForm';
import { PortalLayout } from '../../../components/layouts/portalLayout';
import { useIntl } from 'react-intl';

const WriteRickiePage = () => {
  const intl = useIntl();

  return (
    <PortalLayout>
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.write_rickie.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.write_rickie.text' })}. To learn
          more, visit https://www.justiceforrickieslaughter.com
        </Text>
      </Box>
      <Box>
        <CreateLetterForm />
      </Box>
    </PortalLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default WriteRickiePage;
