import FAQ from './faq';
import React from 'react';
import { faqs } from './contents';
import styled from '@emotion/styled';

const StyledFAQs = styled.section`
  padding-bottom: 5rem;

  h2 {
    margin-bottom: var(--gutter-large);
    text-align: center;

    &::after {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .faqs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media(max-width: 1020px) {
      justify-content: center;
    }
  }
`;

const FAQs = () => (
  <StyledFAQs>
    <div className="row" id="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faqs">
        {faqs.map((f) => (
          <FAQ key={f.title} {...f} />
        ))}
      </div>
    </div>
  </StyledFAQs>
);

export default FAQs;
