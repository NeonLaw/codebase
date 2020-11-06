import { Global, css } from '@emotion/core';

import { Banner } from '../components/homepage/banner';
import { Experience } from '../components/homepage/experience';
import { GetStarted } from '@neonlaw/shared-ui/src/components/get-started';
import { InAction } from '../components/homepage/in-action';
import { ProBono } from '../components/homepage/pro-bono';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Seo } from '../components/seo';
// import { SocialProofLogos } from '../components/homepage/social-proof-logos';
// import { Testimonials } from '../components/homepage/testimonials';
import {
  WhatWeCanHelpWith
} from '../components/homepage/what-we-can-help-with';
import { WhyNeonLaw } from '../components/homepage/why-neon-law';
import { colors } from '@neonlaw/shared-ui/src/themes/neonLaw';
import { useColorMode } from '@chakra-ui/core';
import { useIntl } from 'gatsby-plugin-intl';

const Home = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const intl = useIntl();

  return (
    <PublicLayout isFooterWhite={true}>
      <>
        <Seo title="Homepage" />
        <Banner
          title={intl.formatMessage({ id: 'banner.title' })}
          text={intl.formatMessage({ id: 'banner.text' })}
          buttonText={intl.formatMessage({ id: 'auth.sign_up' })}
        />
        <Global
          styles={css`
            section {
              &:nth-of-type(2n + 2) {
                background: ${colors.lighterBg[colorMode]};
              }
            }
          `}
        />
        <WhyNeonLaw />
        <WhatWeCanHelpWith />
        {/* <SocialProofLogos />
        <Testimonials /> */}
        <InAction />
        <Experience />
        <ProBono />
        <GetStarted />
      </>
    </PublicLayout>
  );
};

export default Home;
