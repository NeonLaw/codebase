import { Banner } from '../components/homepage/banner';
import Experience from '../components/homepage/experience';
import GetStarted from '@neonlaw/shared-ui/src/components/get-started';
import InAction from '../components/homepage/in-action';
import ProBono from '../components/homepage/pro-bono';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Seo } from '../components/seo';
import { SocialProofLogos } from '../components/homepage/social-proof-logos';
import Testimonials from '../components/homepage/testimonials';
import WhatWeCanHelpWith from '../components/homepage/what-we-can-help-with';
import WhyNeonLaw from '../components/homepage/why-neon-law';

const Home = () => (
  <PublicLayout>
    <>
      <Seo title="Homepage" />
      <Banner
        title="Lawyers Invested in Making Tomorrow Better than Today"
        text="Our goal is singular - your upward mobility. Join the thousands of people who have entrusted us with providing legal solutions to make their lives better."
        buttonText="Schedule a Free Consultation Now"
      />
      <WhyNeonLaw />
      <WhatWeCanHelpWith />
      <Testimonials />
      <SocialProofLogos />
      <InAction />
      <Experience />
      <ProBono />
      <GetStarted />
    </>
  </PublicLayout>
);

export default Home;
