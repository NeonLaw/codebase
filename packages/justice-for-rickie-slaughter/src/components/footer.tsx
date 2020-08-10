/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export const Footer = () => {
  const { colorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };

  /* eslint-disable max-len */
  const fathomLink =
    'https://app.usefathom.com/share/poauyjmq/www.justiceforrickieslaughter.com';
  /* eslint-enable max-len */

  return (
    <Box
      bg={lighterBg[colorMode]}
      color={color[colorMode]}
      width="100%"
      textAlign="left"
      padding="2em"
      as="footer"
    >
      Justice For Rickie Slaughter is made and curated by friends of Rickie
      Slaughter.
      <br />
      Please sign our&nbsp;
      <a
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        href="http://chng.it/Wm7XCtm4RD"
        target="_blank"
        rel="noreferrer"
      >
        Change.org petition
      </a> and share this website.
      <br />
      This site was built by&nbsp;
      <a
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        href="https://www.neonlaw.com"
        target="_blank"
        rel="noreferrer"
      >
        Neon Law
      </a>, and is monitored with&nbsp;
      <a
        href={fathomLink}
        style={{ cursor: 'pointer', textDecoration: 'underline' }}
        target="_blank"
        rel="noreferrer"
      >
        Fathom Analytics
      </a>.
    </Box>
  );
};
