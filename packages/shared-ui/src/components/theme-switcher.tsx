import { Box, useColorMode, useColorModeValue } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import React from 'react';
import { gutters } from '../themes/neonLaw';
import styled from '@emotion/styled';

const sunBgColor = '#ffa600';
const moonBgColor = '#e1e6e9';

const StyledThemeSwitcher = styled.div<{isRenderedOnDashboard?: boolean}>`
  display: flex;
  justify-content: center;
  margin-bottom: ${
  ({isRenderedOnDashboard}) => isRenderedOnDashboard ? 'none' : gutters.small };
  margin-right: ${
  ({isRenderedOnDashboard}) => isRenderedOnDashboard ? 
    gutters.xSmallOne : null };

  label {
    display: flex;
    align-items: center;
  }

  span {
    position: relative;
    display: inline-block;
    height: 1.3rem;
    width: 3rem;
    margin: 0 0.5rem;
    border: 2px solid #bbb;
    border-radius: 5rem;
  }

  svg {
    height: 1rem;
  }

  path {
    fill: #9f9f9f;
  }

  span::before {
    content: '';
    position: absolute;
    display: block;
    top: -4px;
    left: -0.2rem;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    transition: 0.2s ease-in;
  }
`;

export const ThemeSwitcher = ({
  isRenderedOnDashboard
}: {isRenderedOnDashboard?: boolean}) => {
  const { toggleColorMode, colorMode } = useColorMode();

  const handleToggleTheme = () => {
    toggleColorMode();
  };

  const circleBg = useColorModeValue(sunBgColor, moonBgColor);
  const sunBg = useColorModeValue(sunBgColor, '#9f9f9f');
  const moonBg = useColorModeValue('#9f9f9f', moonBgColor);

  return (
    <StyledThemeSwitcher isRenderedOnDashboard={isRenderedOnDashboard}>
      <label title='Change Color Mode'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          transform="scale(1.1)"
        >
          <path
            // eslint-disable-next-line
            d="M10 15.741a5.772 5.772 0 10-5.772-5.772A5.772 5.772 0 0010 15.741zM10 0a.518.518 0 00-.525.52v2.108a.528.528 0 00.525.52.518.518 0 00.525-.52V.52A.528.528 0 0010 0zm7.071 2.929a.518.518 0 00-.739 0L14.841 4.42a.528.528 0 000 .739.518.518 0 00.739 0l1.491-1.491a.528.528 0 000-.739zM20 10a.518.518 0 00-.52-.525h-2.108a.528.528 0 00-.52.525.518.518 0 00.52.525h2.108A.528.528 0 0020 10zm-2.929 7.071a.518.518 0 000-.739l-1.491-1.491a.528.528 0 00-.739 0 .518.518 0 000 .739l1.491 1.491a.528.528 0 00.739 0zM10 20a.518.518 0 00.525-.52v-2.108a.528.528 0 00-.525-.52.518.518 0 00-.525.52v2.108A.528.528 0 0010 20zm-7.071-2.929a.518.518 0 00.739 0l1.491-1.491a.528.528 0 000-.739.518.518 0 00-.739 0l-1.494 1.491a.528.528 0 000 .739zM0 10a.518.518 0 00.52.525h2.108a.528.528 0 00.52-.525.518.518 0 00-.52-.525H.52A.528.528 0 000 10zm2.929-7.071a.518.518 0 000 .739L4.42 5.159a.528.528 0 00.739 0 .518.518 0 000-.739L3.668 2.926a.528.528 0 00-.739 0z"
            fillRule="evenodd"
            style={{ fill: sunBg }}
          />
        </svg>
        <input
          className="theme-toggle visually-hidden"
          test-id="theme-toggle"
          type="checkbox"
          onChange={handleToggleTheme}
          onKeyPress={handleToggleTheme}
        />
        <Global
          styles={css`
            body.user-is-tabbing .theme-toggle:focus + span {
              animation: pulse 1s infinite;
              animation-direction: alternate;
              border-color: var(--lightBlue);
            }

            .theme-switcher__circle {
              &::before {
                transform: ${colorMode === 'dark'
      ? 'translate(1.9rem)'
      : 'none'};
              }
            }
          `}
        />
        <Box
          as="span"
          aria-hidden={true}
          _before={{ background: circleBg }}
          className="theme-switcher__circle"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16.698"
          height="20"
          viewBox="0 0 16.698 20"
        >
          <path
            // eslint-disable-next-line
            d="M619.823,153a9.613,9.613,0,0,1-3.824-.786,9.78,9.78,0,0,1-3.122-2.143,9.977,9.977,0,0,1-2.105-3.179,10.2,10.2,0,0,1,0-7.785,9.977,9.977,0,0,1,2.105-3.179A9.78,9.78,0,0,1,616,133.786a9.613,9.613,0,0,1,3.824-.786h.141a9.975,9.975,0,0,0-2.156,3.2,10.151,10.151,0,0,0,2.039,10.963,9.791,9.791,0,0,0,3.077,2.15,9.609,9.609,0,0,0,3.774.825A9.679,9.679,0,0,1,619.823,153Z"
            transform="translate(-610 -133)"
            style={{ fill: moonBg }}
          />
        </svg>
      </label>
    </StyledThemeSwitcher>
  );
};
