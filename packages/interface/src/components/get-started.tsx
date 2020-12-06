import { gutters, sizes } from '../themes/neonLaw';

import { Box, } from '@chakra-ui/core';
import { FlashButton } from './button';
import React from 'react';
import { Section } from './section';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

export const GetStarted = () => {
  const intl = useIntl();

  return (
    <Section
      title={intl.formatMessage({ id: 'get_started.title' })}
      isTitleUnderlined={true}
    >
      <Box
        as="p"
        maxWidth={sizes.textContainerSmall}
        marginBottom={gutters.small}
      >
        {intl.formatMessage({ id: 'get_started.sub_text' })}
      </Box>
      <FlashButton
        onClick={() => {
          navigate('/contact');
        }}
        buttonScheme="teal"
      >
        {intl.formatMessage({ id: 'auth.sign_up' })}
      </FlashButton>
    </Section>
  );
};
