import { HelpWith, HelpWithProps } from './helpWith';

import { Box } from '@chakra-ui/react';
import React from 'react';
import { Section } from '../section';
import { useIntl } from 'react-intl';

export const WhatWeCanHelpWith = () => {
  const intl = useIntl();
  const features: HelpWithProps[] = [
    {
      image: '/images/what-we-can-help-with/injured.jpg',
      path: '/practice-areas/personal-injury',
      text: intl.formatMessage({
        id: 'we_can_help_with.injured',
      }),
    },
    {
      image: '/images/what-we-can-help-with/immigration.jpg',
      path: '/practice-areas/immigration',
      text: intl.formatMessage({
        id: 'we_can_help_with.immigration',
      }),
    },
    {
      image: '/images/what-we-can-help-with/debt.jpg',
      path: '/practice-areas/debt-relief',
      text: intl.formatMessage({
        id: 'we_can_help_with.debt',
      }),
    },
    {
      image: '/images/what-we-can-help-with/cant-afford.jpg',
      path: '/pro-bono',
      text: intl.formatMessage({
        id: 'we_can_help_with.afford',
      }),
    },
    {
      image: '/images/what-we-can-help-with/bussiness.jpg',
      path: '/practice-areas/business',
      text: intl.formatMessage({
        id: 'we_can_help_with.business',
      }),
    },
    {
      image: '/images/what-we-can-help-with/hacked.jpg',
      path: '/practice-areas/cybersecurity-and-privacy',
      text: intl.formatMessage({
        id: 'we_can_help_with.hacked',
      }),
    },
    {
      image: '/images/what-we-can-help-with/divorce.jpg',
      path: '/practice-areas/family-law',
      text: intl.formatMessage({
        id: 'we_can_help_with.divorce',
      }),
    },
    {
      image: '/images/what-we-can-help-with/dead.jpg',
      path: '/practice-areas/estate-planning',
      text: intl.formatMessage({
        id: 'we_can_help_with.dead',
      }),
    },
    // {
    //   text: intl.formatMessage({
    //     id: 'we_can_help_with.buy_a_home',
    //   }),
    // },
    {
      image: '/images/what-we-can-help-with/rights-violated.jpg',
      path: '/practice-areas/constitutional-rights',
      text: intl.formatMessage({
        id: 'we_can_help_with.rights',
      }),
    },
  ];

  return (
    <Section
      title={intl.formatMessage({ id: 'we_can_help_with.title' })}
    >
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
};
