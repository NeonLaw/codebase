import { gutters, sizes } from '../themes/neonLaw';

import { Box } from '@chakra-ui/core';
import { Button } from './button';
import React from 'react';
import { Section } from './section';

export const GetStarted = () => (
  <Section>
    <h2>Ready to Get Started</h2>
    <Box
      as="p"
      maxWidth={sizes.textContainerSmall}
      marginBottom={gutters.small}
    >
      Please reach out if you need help or have any questions. We are happy to
      help you out with our services with providing legal solutions to make your
      life better.
    </Box>
    <Button variantColor="teal">Schedule a Free Consultation Now</Button>
  </Section>
);
