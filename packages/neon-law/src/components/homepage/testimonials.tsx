import { Avatar, useColorMode } from '@chakra-ui/core';
import {
  colors,
  gutters,
  shadows,
} from '@neonlaw/shared-ui/src/themes/neonLaw';

import AuthorPlaceHolder from '../../images/author-placeholder.jpg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import styled from '@emotion/styled';

const StyledTestimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  blockquote {
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

interface Testimonial {
  quote: string;
  author: string;
}

const testimonails: Testimonial[] = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex adipisci blanditiis quis quidem ducimus providen.',
    author: 'Jhon Doe',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex adipisci blanditiis quis quidem ducimus providen.',
    author: 'Jhon Doe',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex adipisci blanditiis quis quidem ducimus providen.',
    author: 'Jhon Doe',
  },
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ex adipisci blanditiis quis quidem ducimus providen.',
    author: 'Jhon Doe',
  },
];

const Testimonials = () => {
  const { colorMode } = useColorMode();
  return (
    <Section styles={{ background: colors.lighterBg[colorMode] }}>
      <h2>What People say about us?</h2>
      <StyledTestimonials>
        {testimonails.map((t: Testimonial) => (
          <blockquote
            style={{
              background: colors.background[colorMode],
              borderColor: colors.borders[colorMode],
            }}
          >
            {/* <img src={AuthorPlaceHolder} alt={t.author} /> */}
            <Avatar src={AuthorPlaceHolder} name={t.author} size="xl" />
            <div className="quote">
              <p>&#10077;{t.quote}&#10078;</p>
              <footer>— {t.author}</footer>
            </div>
          </blockquote>
        ))}
      </StyledTestimonials>
    </Section>
  );
};

export default Testimonials;
