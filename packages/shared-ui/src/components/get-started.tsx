import { gutters, sizes } from '../themes/neonLaw';

import { Box, } from '@chakra-ui/core';
import { FlashButton } from './button';
import React from 'react';
import { Section } from './section';
import { getBrowser } from '../utils/getBrowser';
import { useIntl } from 'gatsby-plugin-intl';

export const GetStarted = () => {
  const intl = useIntl();

  return (
    <Section>
      <h2>{intl.formatMessage({ id: 'get_started.title' })}</h2>
      <Box
        as="p"
        maxWidth={sizes.textContainerSmall}
        marginBottom={gutters.small}
      >
        {intl.formatMessage({ id: 'get_started.sub_text' })}
      </Box>
      <FlashButton
        onClick={() => {
          window.open(
            'https://neonlaw.cliogrow.com/book/xRg6TK0beg2sHsoIf81FkQ',
            getBrowser() === 'Firefox' ? '_self' : '_blank',
          );
        }}
        buttonScheme="teal"
      >
        {intl.formatMessage({ id: 'get_started.btn_text' })}
      </FlashButton>
    </Section>
  );
};
