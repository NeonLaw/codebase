import { Box, useColorMode } from '@chakra-ui/react';
import { colors, gutters, shadows } from '../themes/neonLaw';

import { Link } from 'gatsby';
import React from 'react';

export const ReadMoreButton = ({ children, ...props }: any) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      {...props}
      as={props.to ? Link : 'a'}
      borderBottom={`2px solid ${colors.primaryButtonBg.dark}`}
      display="inline-block"
      marginTop={gutters.xSmall}
      padding=".4rem .3rem"
      position="relative"
      transition="all .2s"
      zIndex={1}
      _after={{
        content: '""',
        display: 'block',
        height: '100%',
        left: 0,
        position: 'absolute',
        right: '100%',
        top: 0,
        transition: 'all .2s',
        zIndex: -1,
      }}
      _hover={{
        '&::after': {
          background: colors.primaryButtonBg.dark,
          right: 0,
        },
        boxShadow: shadows.light1,
        color: colors.text[colorMode],
      }}
    >
      {children ? children : 'Read More'}{' '}
      <Box as="span" fontFamily="sans-serif">
        &nbsp;&rarr;
      </Box>
    </Box>
  );
};
