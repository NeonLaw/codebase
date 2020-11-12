import { Global, css } from '@emotion/core';
import { Input, theme, useColorMode } from '@chakra-ui/core';
import React, { useEffect, useRef } from 'react';

import { colors } from '../../themes/neonLaw';
import styled from '@emotion/styled';

const StyledInput = styled(Input)<{
  version: 'desktop' | 'mobile';
  isRenderedOnDashboard?: boolean;
}>`
  max-width: 350px;
  border: 1px solid ${colors.inputBorders.light};

  @media (max-width: 560px) {
    display: ${({ version, isRenderedOnDashboard }) =>
    version === 'desktop' && !isRenderedOnDashboard ? 'none' : ''};
    max-width: 240px;
  }

  @media (min-width: 561px) {
    display: ${({ version }) => (version === 'mobile' ? 'none' : '')};
  }
`;

interface SearchProps {
  version: 'desktop' | 'mobile';
  isRenderedOnDashboard?: boolean;
}

export const Search = ({
  version, isRenderedOnDashboard
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
              border-color: ${theme.colors.gray[700]} !important;
              &::placeholder {
                color: inherit;
              }
            }
          `}
        />
      ) : null}
      <StyledInput
        isRenderedOnDashboard={isRenderedOnDashboard}
        className={!isRenderedOnDashboard ? 'search-input' : ''}
        version={version}
        ref={inputRef}
        aria-label={message}
        placeholder={message}
        borderRadius="0"
        background={
          version === 'mobile'
            ? `${colors.background[colorMode]} !important`
            : ''
        }
        borderColor={
          version === 'mobile'
            ? `${colors.inputBorders[colorMode]} !important`
            : ''
        }
      />
    </>
  );
};
