import { Global, css } from '@emotion/react';

import { Experience } from '../homepage/experience';
import { GetStarted } from '../getStarted';
import { Hero } from '../homepage/hero';
import { InAction } from '../homepage/in-action';
import { ProBono } from '../homepage/pro-bono';
import { PublicLayout } from '../layouts/publicLayout';
import React from 'react';
import { Seo } from '../seo';
// import { SocialProofLogos } from '../homepage/social-proof-logos';
// import { Testimonials } from '../homepage/testimonials';
import { WhyNeonLaw } from '../homepage/whyNeonLaw';
import { colors } from '../../styles/neonLaw';
import { useColorMode } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

export const NeonLawIndexPage = (): JSX.Element => {
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
