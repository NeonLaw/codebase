import {
  colors,
  gutters,
  shadows,
} from '@neonlaw/shared-ui/src/themes/neonLaw';

import Placeholder from '../../images/placeholder.jpg';
import Placeholder1 from '../../images/placeholder-1.jpg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import styled from '@emotion/styled';
import { useColorMode } from '@chakra-ui/core';

const StyledReasons = styled.div`
  .reason {
    display: flex;
    align-items: center;

    &__text {
      flex: 0 0 35%;
      margin-right: ${gutters.largeOne};
    }

    h3 {
      font-weight: 300;
      font-size: 1.6rem;
      line-height: 1.4;
      strong {
        display: block;
        font-weight: 400;
        font-size: 3rem;
      }
    }

    &__image {
      min-height: 28rem;
      background: url(${Placeholder});
      background-size: cover;
      background-position: center;
      flex: 1;
      box-shadow: ${shadows.light};
    }

    &:not(:last-child) {
      margin-bottom: ${gutters.huge};
    }
  }
`;

export interface ReasonProps {
  title: string | JSX.Element;
  text: string;
  image?: string;
}

const reasons = [
  {
    title: (
      <>
        We only represent <strong>Good People</strong>
      </>
    ),
    text:
      "We do not represent shady people and have fired clients after discovering they're racist, transphobic, sexist, or otherwise bad people.",
  },
  {
    title: (
      <>
        We only represent <strong>Good Causes</strong>
      </>
    ),
    text:
      'We do not represent fossil fuel companies, predatory landlords or creditors, or companies that maliciously use your personal data.',
    image: Placeholder1,
  },
  {
    title: (
      <>
        We use technology to make{' '}
        <strong>
          Legal Services
          <br />
          Affordable
        </strong>
      </>
    ),
    text:
      'We leverage document automation, natural language processing, and our own open-source software to deliver cost-effective legal services.',
  },
];

const WhyNeonLaw = () => {
  const { colorMode } = useColorMode();
  return (
    <Section
      styles={{
        backgroundColor: `${colors.lighterBg[colorMode]}`,
      }}
    >
      <h2 className="heading--underlined">Why Neon Law?</h2>
      <p>A justice-first approach to law and litigation.</p>
      <StyledReasons>
        {reasons.map((reason, i) => (
          <div className="reason" key={new String(reason.title) + `${i}`}>
            <div className="reason__text">
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
            <div
              className="reason__image"
              style={
                reason.image ? { backgroundImage: `url(${reason.image})` } : {}
              }
            ></div>
          </div>
        ))}
      </StyledReasons>
    </Section>
  );
};

export default WhyNeonLaw;
