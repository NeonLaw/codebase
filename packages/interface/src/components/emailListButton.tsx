
import { Box, Center } from '@chakra-ui/core';
import { Button } from '../components/button';
import React from 'react';

export const EmailListButton = () => {
  /* eslint-disable max-len */
  const newsletterSignupLink = 'https://cdn.forms-content.sg-form.com/f382e1e4-378e-11eb-a485-52be2b98b781';
  /* eslint-enable max-len */

  return (
    <Box marginBottom="10px">
      <Center>
        <Button
          aria-label="Sign up for the Neon Law Monthly Newsletter"
          as="a"
          href={newsletterSignupLink}
          target="_blank"
          rel="noopener noreferrer"
          display={['inherit', 'inherit', 'none']}
        >
          Join our e-mail list.
        </Button>

        <Button
          aria-label="Sign up for the Neon Law Monthly Newsletter"
          as="a"
          href={newsletterSignupLink}
          target="_blank"
          rel="noopener noreferrer"
          display={['none', 'none', 'inherit']}
        >
          Sign up for our e-mail list, the Neon Law Monthly.
        </Button>
      </Center>
    </Box>
  );
};
