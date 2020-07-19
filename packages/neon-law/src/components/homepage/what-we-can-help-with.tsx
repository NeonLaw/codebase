import Bandage from '../../images/bandage.svg';
import Bussiness from '../../images/bussiness.svg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import styled from '@emotion/styled';

const StyledFeatures = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  .feature {
    padding: 5rem 0;
    text-align: center;
    border: 1px solid #eee;

    &__img {
      display: block;
      height: 5rem;
      width: 5rem;
      margin: auto;
    }

    &__text {
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
`;

const features = [
  {
    text: "I've been injured.",
    image: Bandage,
  },
  {
    text: 'I have immigration issues.',
  },
  {
    text: "I'm in a lot of debt.",
  },
  {
    text: "I can't afford a lawyer.",
  },
  {
    text: "I'm starting a business.",
    image: Bussiness,
  },
  {
    text: "I've been hacked.",
  },
  {
    text: 'My partner and I want a divorce.',
  },
  {
    text: "What if I'm not here tomorrow?",
  },
  //   {
  //     text: 'I want to buy a home.',
  //   },
  {
    text: 'My rights have been violated.',
  },
];

const WhatWeCanHelpWith = () => (
  <Section>
    <h2 className="heading--underlined">What We can help with?</h2>
    <StyledFeatures>
      {features.map((feature) => (
        <div className="feature">
          <img
            src={feature.image ? feature.image : Bussiness}
            alt=""
            className="feature__img"
          />
          <h3 className="feature__text">{feature.text}</h3>
        </div>
      ))}
    </StyledFeatures>
  </Section>
);

export default WhatWeCanHelpWith;
