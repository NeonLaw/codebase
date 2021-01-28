import { Global, css } from '@emotion/core';
import { Input, theme, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useRef } from 'react';

import { colors } from '../../themes/neonLaw';
import styled from '@emotion/styled';

const StyledInput = styled(Input)<{
  version: 'desktop' | 'mobile';
}>`
  max-width: 350px;

  @media (max-width: 560px) {
    display: none;
    max-width: 240px;
  }

  @media (min-width: 561px) {
    display: ${({ version }) => (version === 'mobile' ? 'none' : 'inherit')};
  }
`;

interface SearchProps {
  version: 'desktop' | 'mobile';
  isRenderedOnDashboard?: boolean;
  background?: string;
  borderColor?: string;
}

export const Search = ({
  version,
  isRenderedOnDashboard,
  background,
  borderColor
}: SearchProps): JSX.Element => {
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

  const message = 'Press "/" to Search';

  const { colorMode } = useColorMode();

  return (
    <>
      {isRenderedOnDashboard === undefined ? (
        <Global
          styles={css`
            .search-input {
              background: ${colors.background.dark} !important;
            }
          `}
        />
      ) : null}
      <StyledInput
        className={!isRenderedOnDashboard ? 'search-input' : ''}
        version={version}
        ref={inputRef}
        aria-label={message}
        placeholder={message}
        borderRadius="0"
        color={colors.text[colorMode]}
        background={
          version === 'mobile'
            ? `${colors.background[colorMode]} !important`
            : background
              ? background
              : ''
        }
        borderColor={
          version === 'mobile'
            ? `${colors.inputBorders[colorMode]} !important`
            : borderColor ? borderColor : theme.colors.gray[700]
        }
      />
    </>
  );
};
