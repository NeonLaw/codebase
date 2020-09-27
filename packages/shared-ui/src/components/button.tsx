/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button as ChakraButton, useColorMode } from '@chakra-ui/core';
import { Global, css, keyframes } from '@emotion/core';
import { colors, gutters, shadows } from '../themes/neonLaw';

import { Link } from './link';
import React from 'react';
import styled from '@emotion/styled';

export const Button = ({ children, ...props }) => {
  const { colorMode } = useColorMode();

  return (
    <ChakraButton
      {...props}
      bg={colors.primaryButtonBg[colorMode]}
      _hover={{ backgroundColor: colors.primaryButtonBgOnHover[colorMode] }}
      _focus={{
        backgroundColor: colors.primaryButtonBg.lightBlue,
        color: colors.primaryButtonColor.light,
        outline: 'none',
      }}
      color={colors.primaryButtonColor[colorMode]}
    >
      {children}
    </ChakraButton>
  );
};

export const ReadMoreButton = ({ children, ...props }: any) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      {...props}
      as={Link}
      borderBottom={`2px solid ${colors.cyanLight}`}
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
          background: colors.cyanLight,
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

export const flash = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    color: #fff;
  }
  60% {
    opacity: 0;
    color: #fff;
  }
  70% {
    opacity: 1;
    color: #fff;
  }
  80% {
    opacity: 0;
  }
  90% {
    opacity: 1;
    color: #fff;
  }
  100% {
    opacity: 0;
    color: #fff;
  }
`;

const FlashButtonWrapper = styled.div`
  display: inline-block;
  outline: var(--outline-transparent);
  outline-offset: 0.3rem;
  transition: all 0.3s;
`;

export const FlashButton = ({ action, children, margin = '0', ...props }) => (
  <FlashButtonWrapper style={{ margin }}>
    <Button
      onClick={(e) => {
        const target = e.target;
        target.classList.add('flash-btn');
        target.parentElement.style.outline = 'var(--outline)';
        setTimeout(() => {
          action();
          target.parentElement.style.outline = 'var(--outline-transparent)';
          target.classList.remove('flash-btn');
        }, 1500);
      }}
      {...props}
    >
      <Global
        styles={css`
          .flash-btn {
            animation: ${flash} 1.5s ease-in infinite;
          }
        `}
      />
      {children}
    </Button>
  </FlashButtonWrapper>
);
