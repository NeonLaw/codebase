import { FAQ } from './faq';
import React from 'react';
import { Section } from '../section';
import { faqs } from './contents';
import styled from '@emotion/styled';

const StyledFAQs = styled.div`
  .faqs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 1020px) {
      justify-content: center;
    }
  }
`;

export const FAQs = () => (
  <StyledFAQs>
    <Section 
      title="Frequently Asked Questions"
      isTitleUnderlined={true}
      isTitleCentered={true}
      underlineColor='orange'
    >
      <div className="row" id="faqs">
        <div className="faqs">
          {faqs.map((f) => (
            <FAQ key={f.title} {...f} />
          ))}
        </div>
      </div>
    </Section>
  </StyledFAQs>
);
