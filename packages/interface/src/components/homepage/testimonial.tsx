import { Avatar, useColorMode } from '@chakra-ui/core';
import {
  colors,
  gutters,
  shadows,
} from '../../themes/neonLaw';

import AuthorPlaceHolder from '../../images/author-placeholder.jpg';
import React from 'react';
import styled from '@emotion/styled';

export interface TestimonialProps {
  quote: string;
  author: string;
}

const StyledTestimonial = styled.blockquote`
  display: flex;
  padding: ${gutters.xSmall};
  justify-content: center;
  align-items: center;
  flex: 0 0 49%;
  min-width: 550px;
  margin-bottom: ${gutters.small};
  border: 1px solid;
  box-shadow: ${shadows.light2};

  @media (max-width: 600px) {
    min-width: 100%;
  }

  @media (max-width: 565px) {
    flex-direction: column;
  }

  .quote {
    @media (min-width: 566px) {
      margin-left: ${gutters.xSmall};
    }

    @media (max-width: 565px) {
      margin-top: ${gutters.xSmall};
    }
  }

  footer {
    margin-top: ${gutters.xSmall};
  }
`;

export const Testimonial = ({ quote, author }: TestimonialProps) => {
  const { colorMode } = useColorMode();
  return (
    <StyledTestimonial
      style={{
        background: colors.background[colorMode],
        borderColor: colors.borders[colorMode],
      }}
    >
      <Avatar src={AuthorPlaceHolder} name={author} size="xl" />
      <div className="quote">
        <p>&#10077;{quote}&#10078;</p>
        <footer>— {author}</footer>
      </div>
    </StyledTestimonial>
  );
};
