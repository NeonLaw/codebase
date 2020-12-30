/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Button as ChakraButton, useColorMode } from '@chakra-ui/core';
import { Global, css, keyframes } from '@emotion/core';

import React from 'react';
import { colors } from '../themes/neonLaw';
import styled from '@emotion/styled';

export const flashAnimation = keyframes`
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

export const Button = ({
  children,
  flash = false,
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
  const { colorMode } = useColorMode();
  const handleClickFlash = (e) => {
    const target = e.target;
    target.classList.add('flash-btn');
    target.parentElement.style.outline = 'var(--outline)';
    setTimeout(() => {
      onClick();
      target.parentElement.style.outline = 'var(--outline-transparent)';
      target.style.outline = 'none';
      target.classList.remove('flash-btn');
    }, 1500);
  };

  const shouldHaveTealStyles = !flash || buttonScheme === 'teal';

  return (
    <FlashButtonWrapper style={flash ? { ...containerStyles } : {}}>
      <ChakraButton
        as={props.as}
        onClick={
          flash
            ? handleClickFlash
            : onClick
        }
        onMouseDown={onMouseDown}
        onMouseOver={onMouseOver}
        style={{ ...styles }}
        background={
          shouldHaveTealStyles ? colors.primaryButtonBg[colorMode] : props.bg
        }
        color={shouldHaveTealStyles ? colors.primaryButtonColor[colorMode] : ''}
        boxShadow={'none !important'}
        {...props}
        _hover={
          shouldHaveTealStyles
            ? { background: colors.primaryButtonBgOnHover[colorMode] }
            : { background: props._hover && props._hover.bg }
        }
        _focus={
          shouldHaveTealStyles
            ? {
              backgroundColor: colors.primaryButtonBg.lightBlue,
              color: colors.primaryButtonColor.light,
              outline: 'none',
            }
            : {
              boxShadow: 'none',
            }
        }
      >
        {flash ? (
          <Global
            styles={css`
              .flash-btn {
                animation: ${flashAnimation} 1.5s ease-in infinite;
                outline: none !important;
              }
            `}
          />
        ) : null}
        {children}
      </ChakraButton>
    </FlashButtonWrapper>
  );
};
