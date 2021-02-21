import { gutters, sizes } from '../styles/neonLaw';

import { Box } from '@chakra-ui/react';
import { Section } from './section';
import { useIntl } from 'react-intl';

export const GetStarted = () => {
  const intl = useIntl();

  return (
    <Section
      title={intl.formatMessage({ id: 'get_started.title' })}
    >
      <Box
        as="p"
        maxWidth={sizes.textContainerSmall}
        marginBottom={gutters.small}
      >
        {intl.formatMessage({ id: 'get_started.sub_text' })}
      </Box>
      {/* <Button
        as={Link}
        to="/contact"
        flash={true}
        buttonScheme="teal"
      >
        {intl.formatMessage({ id: 'auth.sign_up' })}
      </Button> */}
    </Section>
  );
};
