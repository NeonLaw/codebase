import { Testimonial, TestimonialProps } from './testimonial';

import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledTestimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Testimonials = () => {
  const intl = useIntl();

  const testimonails: TestimonialProps[] = [
    {
      author: intl.formatMessage({ id: 'testimonials.quote1.author' }),
      quote: intl.formatMessage({ id: 'testimonials.quote1.text' }),
    },
    {
      author: intl.formatMessage({ id: 'testimonials.quote1.author' }),
      quote: intl.formatMessage({ id: 'testimonials.quote1.text' }),
    },
    {
      author: intl.formatMessage({ id: 'testimonials.quote1.author' }),
      quote: intl.formatMessage({ id: 'testimonials.quote1.text' }),
    },
    {
      author: intl.formatMessage({ id: 'testimonials.quote1.author' }),
      quote: intl.formatMessage({ id: 'testimonials.quote1.text' }),
    },
  ];

  return (
    <Section>
      <h2>{intl.formatMessage({ id: 'testimonials.title' })}</h2>
      <StyledTestimonials>
        {testimonails.map((t: TestimonialProps, i: any) => (
          <Testimonial key={t.author + i} {...t} />
        ))}
      </StyledTestimonials>
    </Section>
  );
};
