import { Box, Heading, PseudoBox, theme } from '@chakra-ui/core';

import Afford from '../../images/what-we-can-help-with/cant-afford.jpg';
import Bussiness from '../../images/what-we-can-help-with/bussiness.jpg';
import Dead from '../../images/what-we-can-help-with/dead.jpg';
import Debt from '../../images/what-we-can-help-with/debt.jpg';
import Divorce from '../../images/what-we-can-help-with/divorce.jpg';
import Hacked from '../../images/what-we-can-help-with/hacked.jpg';
import Immigration from '../../images/what-we-can-help-with/immigration.jpg';
import Injured from '../../images/what-we-can-help-with/injured.jpg';
import { Link } from '@neonlaw/shared-ui/src/components/link';
import React from 'react';
import Rights from '../../images/what-we-can-help-with/rights-violated.jpg';
import { Section } from '@neonlaw/shared-ui/src/components/section';

const features = [
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

const WhatWeCanHelpWith = () => (
  <Section>
    <h2 className="heading--underlined">What We can help with?</h2>
    <Box
      display="grid"
      gridGap="1rem"
      gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
    >
      {features.map((feature) => (
        <PseudoBox
          as={Link}
          to="#"
          position="relative"
          padding="5rem 3rem"
          display="block"
          background={`linear-gradient(rgba(0, 0, 0, 0.45), rgba(0,0,0, 1)), url(${feature.image})`}
          backgroundSize="cover"
          backgroundPosition="center"
          color={theme.colors.white}
          textAlign="center"
          _after={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: '100%',
            content: '""',
            display: 'block',
            height: '100%',
            width: '0%',
            background: 'cyan',
            opacity: 0,
            transition: 'all .3s ease-in',
          }}
          _hover={{
            '&:after': {
              right: '0',
              opacity: '.2',
              width: '100%',
            },
          }}
          _focus={{
            '&:after': {
              right: '0',
              opacity: '.2',
              width: '100%',
            },
          }}
        >
          <Heading as="h3" fontWeight="400">
            {feature.text}
          </Heading>
        </PseudoBox>
      ))}
    </Box>
  </Section>
);

export default WhatWeCanHelpWith;
