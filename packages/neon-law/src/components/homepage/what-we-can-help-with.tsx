import { HelpWith, HelpWithProps } from './help-with';

import Afford from '../../images/what-we-can-help-with/cant-afford.jpg';
import { Box } from '@chakra-ui/core';
import Bussiness from '../../images/what-we-can-help-with/bussiness.jpg';
import Dead from '../../images/what-we-can-help-with/dead.jpg';
import Debt from '../../images/what-we-can-help-with/debt.jpg';
import Divorce from '../../images/what-we-can-help-with/divorce.jpg';
import Hacked from '../../images/what-we-can-help-with/hacked.jpg';
import Immigration from '../../images/what-we-can-help-with/immigration.jpg';
import Injured from '../../images/what-we-can-help-with/injured.jpg';
import React from 'react';
import Rights from '../../images/what-we-can-help-with/rights-violated.jpg';
import { Section } from '@neonlaw/shared-ui/src/components/section';

const features: HelpWithProps[] = [
  {
    text: (
      <>
        I've been <br />
        injured.
      </>
    ),
    image: Injured,
  },
  {
    text: 'I have immigration issues.',
    image: Immigration,
  },
  {
    text: (
      <>
        I'm in a lot of <br />
        debt.
      </>
    ),
    image: Debt,
  },
  {
    text: (
      <>
        I can't afford a <br />
        lawyer.
      </>
    ),
    image: Afford,
  },
  {
    text: "I'm starting a business.",
    image: Bussiness,
  },
  {
    text: (
      <>
        I've been
        <br />
        hacked.
      </>
    ),
    image: Hacked,
  },
  {
    text: 'My partner and I want a divorce.',
    image: Divorce,
  },
  {
    text: "What if I'm not here tomorrow?",
    image: Dead,
  },
  //   {
  //     text: 'I want to buy a home.',
  //   },
  {
    text: 'My rights have been violated.',
    image: Rights,
  },
];

export const WhatWeCanHelpWith = () => (
  <Section>
    <h2 className="heading--underlined">What We can help with?</h2>
    <Box
      display="grid"
      gridGap="1rem"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {features.map((feature: HelpWithProps, i: number) => (
        <HelpWith key={feature.text + `${i}`} {...feature} />
      ))}
    </Box>
  </Section>
);
