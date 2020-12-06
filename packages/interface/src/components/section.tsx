import { Box, useColorMode } from '@chakra-ui/core';
import React, { CSSProperties } from 'react';
import { colors, gutters } from '../themes/neonLaw';

import { Container } from './container';
import styled from '@emotion/styled';

const StyledSection = styled(Box)`
  h2 + p {
    margin-bottom: ${gutters.small};
  }

  &:not(:nth-of-type(1)) {
    border-top: 1px solid;
  }
`;

export interface SectionProps {
  children: JSX.Element | JSX.Element[];
  styles?: CSSProperties;
  title?: string;
  isTitleUnderlined?: boolean;
  isTitleCentered?: boolean;
  underlineColor?: 'orange';
  titleStyles?: CSSProperties;
  titleTestId?: string;
}

export const Section = ({
  children,
  styles,
  title,
  isTitleUnderlined,
  isTitleCentered,
  underlineColor,
  titleStyles = {},
  titleTestId,
}: SectionProps) => {
  const { colorMode } = useColorMode();
  return (
    <StyledSection
      // eslint-disable-next-line
      // @ts-ignore
      as="section"
      style={{ ...styles }}
      borderColor={`${colors.borders[colorMode]} !important`}
    >
      <Container>
        <>
          <h2
            style={{
              ...titleStyles,
              textAlign: isTitleCentered ? 'center' : 'left',
            }}
            className={`${
              isTitleUnderlined
                ? 'heading__underlined heading__underlined--cyan'
                : ''
            } ${
              underlineColor === 'orange' ? 'heading__underlined--orange' : ''
            } ${isTitleCentered ? 'heading__underlined--centered' : ''}`}
            data-testid={titleTestId}
          >
            {title}
          </h2>
          {children}
        </>
      </Container>
    </StyledSection>
  );
};
