import { Input, theme, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useRef } from 'react';

import { colors } from '../../themes/neonLaw';
import styled from '@emotion/styled';

const StyledInput = styled(Input)<{ version: 'desktop' | 'mobile' }>`
  max-width: 350px;
  background: ${colors.background.dark};
  border-color: ${theme.colors.gray[700]};

  @media (max-width: 560px) {
    display: ${({ version }) => (version === 'desktop' ? 'none' : '')};
  }

  @media (min-width: 561px) {
    display: ${({ version }) => (version === 'mobile' ? 'none' : '')};
  }
`;

interface SearchProps {
  version: 'desktop' | 'mobile';
}

export const Search = ({ version }: SearchProps): JSX.Element => {
  const inputRef = useRef<any>();

  const handleSlashPress = (e) => {
    if (e.key === '/') {
      console.log(e.key);
      const activeEl = document.activeElement;
      const focusWrapper = document.querySelector('#gatsby-focus-wrapper');

      if (activeEl === focusWrapper || activeEl === document.body) {
        e.preventDefault();
        inputRef.current?.focus({ preventScroll: true });
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleSlashPress);

    return (): void => {
      window.removeEventListener('keydown', handleSlashPress);
    };
  }, []);

  const message = 'Search (Press "/" to focus)';

  const { colorMode } = useColorMode();

  return (
    <StyledInput
      version={version}
      ref={inputRef}
      aria-label={message}
      placeholder={message}
      background={
        version === 'mobile' ? `${colors.background[colorMode]} !important` : ''
      }
      borderColor={
        version === 'mobile'
          ? `${colors.inputBorders[colorMode]} !important`
          : ''
      }
    />
  );
};
