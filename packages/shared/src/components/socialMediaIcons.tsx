/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  FaFacebookF, FaGithub, FaLinkedinIn, FaMailchimp, FaTwitter
} from 'react-icons/fa';
import { Box } from '@chakra-ui/core';
import { Button } from '../components/button';
import React from 'react';

export const SocialMediaIcons = ({ display }) => (
  <Box display={display} mb="7px">
    <Button
      aria-label="Visit @NeonLaw on Twitter"
      as="a"
      href="https://www.twitter.com/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter style={{ display: 'inline' }} />
    </Button>
    <Button
      aria-label="Visit the Neon Law Facebook page"
      as="a"
      href="https://www.facebook.com/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF style={{ display: 'inline' }} />
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
      as="a"
      href="https://github.com/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neon Law GitHub page"
    >
      <FaGithub style={{ display: 'inline' }} />
    </Button>
    <Button
      as="a"
      href="https://mailchi.mp/f364242f585f/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neon Law Monthly - an Email Newsletter"
    >
      <FaMailchimp style={{ display: 'inline' }} />
    </Button>
  </Box >
);
