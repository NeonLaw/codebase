import { Box, useColorMode } from '@chakra-ui/core';
import { Link, navigate } from 'gatsby';
import React from 'react';

export const SideNavContent = ({ links }) => {
  const color = { dark: 'white', light: 'black' };
  const activeColor = { dark: 'cyan.500', light: 'cyan.800' };
  const bg = { dark: 'black', light: 'cyan.500' };
  const { colorMode } = useColorMode();

  return (
    <Box
      position="relative"
      color={color[colorMode]}
      bg={bg[colorMode]}
      height="100%"
      overflowY="auto"
    >
      <Box
        as="nav"
        height={'calc(100vh - 4em)'}
        aria-label="Main navigation"
        p="6"
      >
        <Box
          margin="0 auto"
          as="a"
          cursor="pointer"
          display={['box', 'box', 'none']}
          onClick={() => { navigate('/'); }}
          aria-label="Neon Law, Back to homepage"
          width="5em"
        >
          Delete Your Data
        </Box>
        {links.map((link, i) => (
          <Box mb="10" key={i}>
            <Link
              activeStyle={{ color: activeColor[colorMode] }}
              to={link.route}>
              {link.label}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
