import { colors, gutters } from '../../styles/deleteYourData';

import { FAQ } from './faq';
import React from 'react';
import { Section } from '../section';
import { faqs } from './contents';
import styled from '@emotion/styled';
import { useColorModeValue } from '@chakra-ui/react';

const StyledFAQs = styled.div`
  .faqs {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: ${gutters.large} 0 0;

    @media (max-width: 1020px) {
      justify-content: center;
    }
  }
`;

export const FAQs = () => (
  <StyledFAQs>
    <Section
      title="Frequently Asked Questions"
      isTitleCentered={true}
      underlineColor='orange'
      styles={{background: useColorModeValue(colors.offWhite, colors.black)}}
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
