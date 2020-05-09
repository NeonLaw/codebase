import { Box, Flex } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Button } from '@components/button';
import { Link } from '@components/link';

export const PrivacyDisclaimer = () => {
  const [disclaimerAcceptance, accept] = useState(false);
  useEffect(() => {
    accept(!!localStorage.getItem('acceptPrivacyDisclaimer'));
  }, []);

  if (disclaimerAcceptance) {
    return null;
  }

  const acceptPrivacyDisclaimer = () => {
    localStorage.setItem('acceptPrivacyDisclaimer', 'true');
    accept(true);
  };

  return (
    <Box
      bottom="0"
      position="fixed"
      padding="1em"
      left="0"
      right="0"
      zIndex={999}
      backgroundColor="gray.200"
      color="black"
    >
      <Flex
        direction={['column', 'column', 'row']}
        size="100%"
        px="6"
        align="center"
      >
        <Box marginRight="1em">
          This website uses cookies and other information to provide you a
          better customer service. You can read more about this in our{' '}
          <Box as="span" textDecoration="underline">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </Box>.
          Your continued use of this website constitutes acceptance
          of our privacy policy.
        </Box>

        <Box>
          <Button
            color="black"
            onClick={acceptPrivacyDisclaimer}
          >
            I Accept
          </Button>
        </Box>
        <Box width="250px" display={['none', 'none', 'block']} />
      </Flex>
    </Box>
  );
};
