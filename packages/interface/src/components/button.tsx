/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Button as ChakraButton,
  useColorMode,
} from '@chakra-ui/core';
import { Global, css, keyframes } from '@emotion/core';
import { colors, gutters, shadows } from '../themes/neonLaw';
import React from 'react';
import styled from '@emotion/styled';

export const Button = ({
  children,
  ...props
}) => {
  const { colorMode } = useColorMode();
  return (
    <ChakraButton
      {...props}
      bg={colors.primaryButtonBg[colorMode]}
      _hover={{ background: colors.primaryButtonBgOnHover[colorMode] }}
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
      borderBottom={`2px solid ${colors.primaryColor400}`}
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
          background: colors.primaryColor400,
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

export const FlashButton = ({
  children,
  styles = {},
  containerStyles = {},
  buttonScheme = '',
  onMouseDown = () => {
    return;
  },
  onMouseOver = () => {
    return;
  },
  onClick = () => {
    return;
  },
  ...props
}) => {
  const as = buttonScheme == 'teal' ? Button : ChakraButton;
  return (
    <FlashButtonWrapper style={{...containerStyles }}>
      <Box
        as={as}
        onClick={(e) => {
          const target = e.target;
          target.classList.add('flash-btn');
          target.parentElement.style.outline = 'var(--outline)';
          setTimeout(() => {
            onClick();
            target.parentElement.style.outline = 'var(--outline-transparent)';
            target.style.outline = 'none';
            target.classList.remove('flash-btn');
          }, 1500);
        }}
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        style={{...styles}}
        {...props}
        _focus={{
          boxShadow: 'none',
        }}
      >
        <Global
          styles={css`
            .flash-btn {
              animation: ${flash} 1.5s ease-in infinite;
              outline: none !important;
            }
          `}
        />
        {children}
      </Box>
    </FlashButtonWrapper>
  );
};
