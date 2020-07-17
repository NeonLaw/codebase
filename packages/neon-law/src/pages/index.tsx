import { Banner } from '../components/homepage/banner';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import { Seo } from '../components/seo';
import { SocialProofLogos } from '../components/homepage/social-proof-logos';

const Home = () => (
  <PublicLayout>
    <>
      <Seo title="Homepage" />

      <Banner
        title="Lawyers Invested in Making Tomorrow Better than Today"
        text="Our goal is singular - your upward mobility. Join the thousands of people who have entrusted us with providing legal solutions to make their lives better."
        buttonText="Schedule a Free Consultation Now"
      />

      <SocialProofLogos />

      <Section>
        <h2 className="heading--underlined">Why Neon Law?</h2>
        <p>A justice-first approach to law and litigation.</p>
      </Section>

      <Section>
        <h2 className="heading--underlined">What We can help with?</h2>
        <p>A justice-first approach to law and litigation.</p>
      </Section>

      <Section>
        <h2 className="heading--underlined">Pro Bono</h2>
        <p>
          Finally, and most importantly, we are proudest of our commitment to
          [pro bono](/pro-bono) work and wish we could do it full time. If you
          require assistance and have attained a
          [SOLA](http://www.lacsnpro_bono.org/wp-content/uploads/2019/12/SOLA-Process-Service-FAQ-2020.pdf)
          from either [Nevada Legal Services](https://nlslaw.net) or [Legal Aid
          Center of Southern Nevada](https://www.lacsn.org/), you may [reach
          out](/contact) to us for a free consultation.
        </p>
      </Section>
    </>
  </PublicLayout>
);

export default Home;
