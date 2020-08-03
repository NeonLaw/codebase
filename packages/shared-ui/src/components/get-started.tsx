import { gutters, sizes } from '../themes/neonLaw';

import { Box } from '@chakra-ui/core';
import { Button } from './button';
import React from 'react';
import { Section } from './section';
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
      <Button variantColor="teal">
        {intl.formatMessage({ id: 'get_started.btn_text' })}
      </Button>
    </Section>
  );
};
