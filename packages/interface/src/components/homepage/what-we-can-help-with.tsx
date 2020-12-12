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
import { Section } from '../section';
import { useIntl } from 'gatsby-plugin-intl';

export const WhatWeCanHelpWith = () => {
  const intl = useIntl();
  const features: HelpWithProps[] = [
    {
      image: Injured,
      text: intl.formatMessage({
        id: 'we_can_help_with.injured',
      }),
    },
    {
      image: Immigration,
      text: intl.formatMessage({
        id: 'we_can_help_with.immigration',
      }),
    },
    {
      image: Debt,
      text: intl.formatMessage({
        id: 'we_can_help_with.debt',
      }),
    },
    {
      image: Afford,
      text: intl.formatMessage({
        id: 'we_can_help_with.afford',
      }),
    },
    {
      image: Bussiness,
      text: intl.formatMessage({
        id: 'we_can_help_with.bussiness',
      }),
    },
    {
      image: Hacked,
      text: intl.formatMessage({
        id: 'we_can_help_with.hacked',
      }),
    },
    {
      image: Divorce,
      text: intl.formatMessage({
        id: 'we_can_help_with.divorce',
      }),
    },
    {
      image: Dead,
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
      text: intl.formatMessage({
        id: 'we_can_help_with.rights',
      }),
    },
  ];

  return (
    <Section>
      <h2 className="heading--underlined">
        {intl.formatMessage({ id: 'we_can_help_with.title' })}
      </h2>
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
