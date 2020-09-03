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

  const fathomLink =
    'https://app.usefathom.com/share/aokzddgf/www.deleteyourdata.com';

  return (
    <Box
      bg={lighterBg[colorMode]}
      color={color[colorMode]}
      width="100%"
      textAlign="left"
      padding="2em"
      as="footer"
    >
      This site was built by&nbsp;
      <a href="https://www.neonlaw.com" target="_blank" rel="noreferrer">
        Neon Law, the Upward Mobility Law Firm
      </a>.
      <br />
      This website is monitored with&nbsp;
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
