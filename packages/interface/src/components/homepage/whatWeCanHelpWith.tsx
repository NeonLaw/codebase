import { HelpWith, HelpWithProps } from './helpWith';

import Afford from '../../images/what-we-can-help-with/cant-afford.jpg';
import { Box } from '@chakra-ui/react';
import Bussiness from '../../images/what-we-can-help-with/bussiness.jpg';
import Dead from '../../images/what-we-can-help-with/dead.jpg';
import Debt from '../../images/what-we-can-help-with/debt.jpg';
import Divorce from '../../images/what-we-can-help-with/divorce.jpg';
import Hacked from '../../images/what-we-can-help-with/hacked.jpg';
import Immigration from '../../images/what-we-can-help-with/immigration.jpg';
import Injured from '../../images/what-we-can-help-with/injured.jpg';
import React from 'react';
import Rights from '../../images/what-we-can-help-with/rights-violated.jpg';
import { Section } from '../section';
import { useIntl } from 'gatsby-plugin-intl';

export const WhatWeCanHelpWith = () => {
  const intl = useIntl();
  const features: HelpWithProps[] = [
    {
      image: Injured,
      path: '/practice-areas/personal-injury',
      text: intl.formatMessage({
        id: 'we_can_help_with.injured',
      }),
    },
    {
      image: Immigration,
      path: '/practice-areas/immigration',
      text: intl.formatMessage({
        id: 'we_can_help_with.immigration',
      }),
    },
    {
      image: Debt,
      path: '/practice-areas/debt-relief',
      text: intl.formatMessage({
        id: 'we_can_help_with.debt',
      }),
    },
    {
      image: Afford,
      path: '/pro-bono',
      text: intl.formatMessage({
        id: 'we_can_help_with.afford',
      }),
    },
    {
      image: Bussiness,
      path: '/practice-areas/business',
      text: intl.formatMessage({
        id: 'we_can_help_with.business',
      }),
    },
    {
      image: Hacked,
      path: '/practice-areas/cybersecurity-and-privacy',
      text: intl.formatMessage({
        id: 'we_can_help_with.hacked',
      }),
    },
    {
      image: Divorce,
      path: '/practice-areas/family-law',
      text: intl.formatMessage({
        id: 'we_can_help_with.divorce',
      }),
    },
    {
      image: Dead,
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
      image: Rights,
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
