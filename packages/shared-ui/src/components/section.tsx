import { Box, useColorMode } from '@chakra-ui/core';
import React, { CSSProperties } from 'react';
import { colors, gutters } from '../themes/neonLaw';

import { Container } from './container';
import styled from '@emotion/styled';

const StyledSection = styled(Box)`
  padding: ${gutters.largeOne} 0;

  @media (max-width: 600px) {
    padding: ${gutters.largeTwo} 0;
  }

  h2 {
    &::after {
      content: '';
      display: block;
      height: 2px;
      width: 8rem;
      height: 2px;
      background: ${colors.primaryColor400};
      margin: ${gutters.xSmallOne} 0;
    }
  }

  h2 + p {
    margin-bottom: ${gutters.small};
  }

  &:not(:nth-of-type(1)) {
    border-top: 1px solid;
  }
`;

export const Section = ({
  children,
  styles,
}: {
  children: JSX.Element | JSX.Element[];
  styles?: CSSProperties;
}) => {
  const { colorMode } = useColorMode();
  return (
    <StyledSection
      // eslint-disable-next-line
      // @ts-ignore
      as="section"
      style={{ ...styles }}
      borderColor={`${colors.borders[colorMode]} !important`}
    >
      <Container>{children}</Container>
    </StyledSection>
  );
};
