import { Box, useColorMode } from '@chakra-ui/react';
import { colors, gutters } from '../../styles/neonLaw';

import React from 'react';
import { Search } from '../navigationBars/search';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

const StyledSideNavContent = styled.div<{ isRenderedOnDashboard?: boolean }>`
  height: 100%;

  nav {
    padding: ${({ isRenderedOnDashboard }) =>
    !isRenderedOnDashboard ? '1.5rem' : `${gutters.xSmall} 0`};

    @media (max-width: 800px) {
      padding: ${({ isRenderedOnDashboard }) =>
    !isRenderedOnDashboard ? '1.5rem' : '0'};
    }
  }

  .links {
    margin-top: ${gutters.xSmallOne};

    @media(max-width: 800px) {
      margin: ${gutters.small} 0;
    }

    & > * {
      &:not(:last-child) {
        margin-bottom: ${gutters.small};
      }
    }

    .link {
      transition: all 0.2s;
      padding: 0.1rem 1rem;
      border-left: 4px solid transparent;

      &:hover {
        color: ${colors.primaryColor400};
      }
    }

    .active {
      color: ${colors.primaryColor400};
      border-left: 4px solid ${colors.primaryColor400};
    }

    svg {
      display: inline-block;
      margin-right: ${gutters.xSmallOne};
    }
  }
`;

export const SideNavContent = ({
  links,
  isRenderedOnDashboard,
}: {
  links: any;
  isRenderedOnDashboard?: boolean;
}): JSX.Element => {
  const color = { dark: 'white', light: 'black' };
  const activeColor = { dark: 'cyan.500', light: 'cyan.800' };
  const bg = { dark: 'black', light: 'gray.200' };
  const { colorMode } = useColorMode();
  const intl = useIntl();

  return (
    <StyledSideNavContent
      isRenderedOnDashboard={isRenderedOnDashboard}
      style={{
        borderRight: colorMode === 'light' ? 'none' : '1px solid #222'
      }}
    >
      <Box
        position="relative"
        color={color[colorMode]}
        bg={bg[colorMode]}
        overflowY="auto"
        height="100%"
      >
        <Box
          as="nav"
          aria-label="Main navigation"
          style={
            isRenderedOnDashboard
              ? {
                display: 'flex',
                flexDirection: 'column',
              }
              : {}
          }
        >
          <Box mb="10" display={isRenderedOnDashboard ? 'none' : ''}>
            <Search
              version="mobile"
            />
          </Box>
          <div className="links">
            {links.map((link, i) => (
              !link ? null : <Box key={i}>
                <Box
                  activeStyle={{ color: activeColor[colorMode] }}
                  activeClassName="active"
                  to={link.route}
                  className="link"
                  data-testid={
                    `${link.label.toLowerCase()}-side-navigation-link`
                  }
                >
                  {isRenderedOnDashboard ? link.icon : null}
                  {link.label}
                </Box>
              </Box>
            ))}
            <Box
              mb="10"
              cursor="pointer"
              className="link"
            >
              {intl.formatMessage({ id: 'auth.login' })}
            </Box>
          </div>
        </Box>
      </Box>
    </StyledSideNavContent>
  );
};
