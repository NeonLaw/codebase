import { Box, Button } from '@chakra-ui/core';
import {
  FaFacebookF, FaGithub, FaLinkedinIn, FaMailchimp, FaTwitter
} from 'react-icons/fa';
import React from 'react';

export const SocialMediaIcons = ({ display }) => (
  <Box display={display} mb="7px">
    <a
      href="https://www.twitter.com/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="@Neon Law on Twitter"
    >
      <Button>
        <FaTwitter style={{ display: 'inline' }} />
      </Button>
    </a>
    <a
      href="https://www.facebook.com/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neon Law Facebook page"
    >
      <Button>
        <FaFacebookF style={{ display: 'inline' }} />
      </Button>
    </a>
    <a
      href="https://www.linkedin.com/company/neon-law"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neon Law LinkedIn page"
    >
      <Button>
        <FaLinkedinIn style={{ display: 'inline' }} />
      </Button>
    </a>
    <a
      href="https://github.com/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neon Law GitHub page"
    >
      <Button>
        <FaGithub style={{ display: 'inline' }} />
      </Button>
    </a>
    <a
      href="https://mailchi.mp/f364242f585f/neonlaw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Neon Law Monthly - an Email Newsletter"
    >
      <Button>
        <FaMailchimp style={{ display: 'inline' }} />
      </Button>
    </a>
  </Box>
);
