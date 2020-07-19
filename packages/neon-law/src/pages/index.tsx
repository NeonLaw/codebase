import { Banner } from '../components/homepage/banner';
import { Box } from '@chakra-ui/core';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import { Seo } from '../components/seo';
import { UnderlineLink } from '@neonlaw/shared-ui/src/utils/mdxComponents';
// import { SocialProofLogos } from '../components/homepage/social-proof-logos';
import WhyNeonLaw from '../components/homepage/why-neon-law';
import { sizes } from '@neonlaw/shared-ui/src/themes/neonLaw';

const Home = () => (
  <PublicLayout>
    <>
      <Seo title="Homepage" />

      <Banner
        title="Lawyers Invested in Making Tomorrow Better than Today"
        text="Our goal is singular - your upward mobility. Join the thousands of people who have entrusted us with providing legal solutions to make their lives better."
        buttonText="Schedule a Free Consultation Now"
      />

      {/* <SocialProofLogos /> */}

      <WhyNeonLaw />

      <Section>
        <h2 className="heading--underlined">What We can help with?</h2>
        <p>A justice-first approach to law and litigation.</p>
      </Section>

      <Section>
        <h2 className="heading--underlined">Pro Bono</h2>
        <Box as="p" maxWidth={sizes.textContainerSmall}>
          Finally, and most importantly, we are proudest of our commitment to{' '}
          <UnderlineLink to="/pro-bono/">pro bono</UnderlineLink> work and wish
          we could do it full time. If you require assistance and have attained
          a{' '}
          <UnderlineLink href="http://www.lacsnpro_bono.org/wp-content/uploads/2019/12/SOLA-Process-Service-FAQ-2020.pdf">
            SOLA
          </UnderlineLink>{' '}
          from either{' '}
          <UnderlineLink href="https://nlslaw.net">
            Nevada Legal Services
          </UnderlineLink>{' '}
          or{' '}
          <a href="https://www.lacsn.org/">
            Legal Aid Center of Southern Nevada
          </a>
          , you may <UnderlineLink to="/contact/">contact</UnderlineLink> to us
          for a free consultation.
        </Box>
      </Section>
    </>
  </PublicLayout>
);

export default Home;
