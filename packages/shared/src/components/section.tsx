import { colors, gutters } from '../themes/neonLaw';

import { Box } from '@chakra-ui/core';
import { Container } from './container';
import React from 'react';
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
`;

export const Section = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => (
  <StyledSection as="section">
    <Container>{children}</Container>
  </StyledSection>
);
