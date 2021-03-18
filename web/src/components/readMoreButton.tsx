import { Box, useColorMode } from '@chakra-ui/react';
import { colors, gutters, shadows } from '../styles/neonLaw';

import { GetLayoutDirection } from '../../utils/getLayoutDirection';
import { default as Link } from 'next/link';
import React from 'react';

export const ReadMoreButton = ({ children, ...props }: any) => {
  const { colorMode } = useColorMode();
  const dir = GetLayoutDirection();

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
        left: dir === 'rtl' ? '100%' : 0,
        position: 'absolute',
        right: dir === 'rtl' ? 0 : '100%',
        top: 0,
        transition: 'all .2s',
        zIndex: -1,
      }}
      _hover={{
        '&::after': {
          background: colors.primaryButtonBg.dark,
          left: 0,
          right: 0,
        },
        boxShadow: shadows.light1,
        color: colors.text[colorMode],
      }}
    >
      {children ? children : 'Read More'}{' '}
      <Box
        display="inline-block"
        as="span"
        fontFamily="sans-serif"
        transform={dir === 'rtl' ? 'rotate(180deg) translateY(-3px)' : null}
      >
        &nbsp;&rarr;
      </Box>
    </Box>
  );
};
