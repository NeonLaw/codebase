import { Box, Center } from '@chakra-ui/core';
import {
  FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter
} from 'react-icons/fa';
import { BiPhone } from 'react-icons/bi';
import { Button } from '../components/button';
import { MdEmail } from 'react-icons/md';
import React from 'react';

export const SocialMediaIcons = () => {
  return (
    <Box marginBottom="10px">
      <Center>
        <Button
          aria-label={'Visit @NeonLaw on Twitter'}
          as="a"
          href={'https://www.twitter.com/NeonLaw'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter style={{ display: 'inline' }} />
        </Button>
        <Button
          aria-label={'Visit NeonLaw on facebook'}
          as="a"
          href={'https://www.facebook.com/NeonLaw'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook style={{ display: 'inline' }} />
        </Button>
        <Button
          aria-label={'Visit @neon.law on Instagram'}
          as="a"
          href={'https://www.instagram.com/neon.law'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram style={{ display: 'inline' }} />
        </Button>
        <Button
          as="a"
          href="https://github.com/neonlaw/codebase"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Neon Law GitHub Repository"
        >
          <FaGithub style={{ display: 'inline' }} />
        </Button>
        <Button
          aria-label="Visit the Neon Law LinkedIn page"
          as="a"
          href="https://www.linkedin.com/company/neon-law"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn style={{ display: 'inline' }} />
        </Button>
        <Button
          aria-label="Call Neon Law at 1.415.949.3892"
          as="a"
          href="tel:415-949-3892"
        >
          <BiPhone style={{ display: 'inline' }} />
        </Button>
        <Button
          aria-label="Email Neon Law at support@neonlaw.com"
          as="a"
          href="mailto:support@neonlaw.com"
        >
          <MdEmail style={{ display: 'inline' }} />
        </Button>
      </Center>
    </Box>
  );
};
