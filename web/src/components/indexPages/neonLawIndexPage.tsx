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

export const NeonLawIndexPage = (): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <PublicLayout isFooterWhite={true}>
      <Seo title="Homepage" />
      <Hero />
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
