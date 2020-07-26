import React, { CSSProperties } from 'react';
import { colors, gutters } from '../themes/neonLaw';

import { Box } from '@chakra-ui/core';
import { Container } from './container';
import styled from '@emotion/styled';

const StyledSection = styled(Box)`
  padding: ${gutters.largeOne} 0;

  h2 {
    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 8rem;
      height: 2px;
      background: ${colors.cyanLight};
      margin: 1rem 0;
    }
  }

  h2 + p {
    margin-bottom: ${gutters.small};
  }
`;

export const Section = ({
  children,
  styles,
}: {
  children: JSX.Element | JSX.Element[];
  styles?: CSSProperties;
}) => (
  <StyledSection as="section" style={{ ...styles }}>
    <Container>{children}</Container>
  </StyledSection>
);
