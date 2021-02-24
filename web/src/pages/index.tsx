import { Global, css } from '@emotion/react';

import { Experience } from '../components/homepage/experience';
import { GetStarted } from '../components/getStarted';
import { Hero } from '../components/homepage/hero';
import { InAction } from '../components/homepage/in-action';
import { ProBono } from '../components/homepage/pro-bono';
import { PublicLayout } from '../layouts/publicLayout';
import React from 'react';
import { Seo } from '../components/seo';
// import { SocialProofLogos } from '../components/homepage/social-proof-logos';
// import { Testimonials } from '../components/homepage/testimonials';
import { WhyNeonLaw } from '../components/homepage/whyNeonLaw';
import { colors } from '../styles/neonLaw';
import { useColorMode } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

const Home = (): JSX.Element => {
  const { colorMode } = useColorMode();
  const intl = useIntl();

  return (
    <PublicLayout isFooterWhite={true}>
      <Seo title="Homepage" />
      <Hero
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
      {/* <SocialProofLogos />
        <Testimonials /> */}
      <InAction />
      <Experience />
      <ProBono />
      <GetStarted />
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default Home;
