import {
  borders,
  colors,
  gradients,
  gutters
} from '../../themes/deleteYourData';
import { useColorMode, useColorModeValue } from '@chakra-ui/core';

import React from 'react';
import styled from '@emotion/styled';

const StyledFAQ = styled.div`
  flex: 0 0 47%;
  margin-bottom: ${gutters.large};
  padding: ${gutters.normal} ${gutters.small};
  background: ${gradients.dark};
  border-radius: 1.875rem;
  max-width: 500px;

  @media (max-width: 1020px) {
    min-width: 540px;
  }

  @media (max-width: 620px) {
    min-width: 400px;
  }

  @media (max-width: 540px) {
    text-align: center;
  }

  @media (max-width: 400px) {
    min-width: auto;
    flex: 0 0 100%;
  }

  .img {
    height: 4.375rem;

    &-container {
      display: inline-block;
      padding: ${gutters.small2} ${gutters.small};
      margin: -300px 0 ${gutters.small3};
      border-radius: 1.25rem;
    }
  }

  a {
    color: ${colors.skyblue};
  }
`;

export interface FAQProps {
  title: string;
  text: string | JSX.Element;
  icon: string;
}

export const FAQ = ({ title, text, icon }: FAQProps) => {
  const { colorMode } = useColorMode();

  return (
    <StyledFAQ
      style={{
        background: useColorModeValue(
          colors.white,
          gradients.dark,
        ),
        border: colorMode === 'light' ? borders.light : 'none'
      }}
    >
      <div
        className="img-container"
        style={{
          background: useColorModeValue(
            colors.white,
            gradients.dark,
          ),
          border: colorMode === 'light' ? borders.light : 'none'
        }}
      >
        <img className="img" src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </StyledFAQ>
  );
};
