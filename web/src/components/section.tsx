import { Box, useColorMode } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';
import { colors, gutters } from '../styles/neonLaw';
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
  children: JSX.Element | JSX.Element[] | string;
  styles?: CSSProperties;
  title?: string;
  isTitleNotUnderlined?: boolean;
  isTitleCentered?: boolean;
  underlineColor?: 'orange';
  titleStyles?: CSSProperties;
  titleTestId?: string;
}

export const Section = ({
  children,
  styles,
  title,
  isTitleNotUnderlined,
  isTitleCentered,
  underlineColor,
  titleStyles = {},
  titleTestId,
}: SectionProps) => {
  const { colorMode } = useColorMode();
  return (
    <StyledSection
      as="section"
      style={{ ...styles }}
      borderColor={`${colors.borders[colorMode]} !important`}
    >
      <Container>
        <>
          {
            title ? <h2
              style={{
                ...titleStyles,
                textAlign: isTitleCentered ? 'center' : 'left',
              }}
              className={`${
                isTitleNotUnderlined
                  ? ''
                  : 'heading__underlined heading__underlined--cyan'
              } ${
                underlineColor === 'orange' ? 'heading__underlined--orange' : ''
              } ${isTitleCentered ? 'heading__underlined--centered' : ''}`}
              data-testid={titleTestId}
            >
              {title}
            </h2> : null
          }
          {children}
        </>
      </Container>
    </StyledSection>
  );
};
