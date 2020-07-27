import { Testimonial, TestimonialProps } from './testimonial';

import AuthorPlaceHolder from '../../images/author-placeholder.jpg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import { colors } from '@neonlaw/shared-ui/src/themes/neonLaw';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/core';

const StyledTestimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const testimonails: TestimonialProps[] = [
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

export const Testimonials = () => {
  const { colorMode } = useColorMode();
  return (
    <Section styles={{ background: colors.lighterBg[colorMode] }}>
      <h2>What People say about us?</h2>
      <StyledTestimonials>
        {testimonails.map((t: TestimonialProps, i: any) => (
          <Testimonial key={t.author + i} {...t} />
        ))}
      </StyledTestimonials>
    </Section>
  );
};
