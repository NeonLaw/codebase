import Reason, { ReasonProps } from './reason';

import Placeholder1 from '../../images/placeholder-1.jpg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';

const reasons: ReasonProps[] = [
  {
    title: (
      <>
        We only represent <strong>Good People</strong>
      </>
    ),
    text:
      "We do not represent shady people and have fired clients after discovering they're racist, transphobic, sexist, or otherwise bad people.",
  },
  {
    title: (
      <>
        We only represent <strong>Good Causes</strong>
      </>
    ),
    text:
      'We do not represent fossil fuel companies, predatory landlords or creditors, or companies that maliciously use your personal data.',
    image: Placeholder1,
  },
  {
    title: (
      <>
        We use technology to make{' '}
        <strong>
          Legal Services
          <br />
          Affordable
        </strong>
      </>
    ),
    text:
      'We leverage document automation, natural language processing, and our own open-source software to deliver cost-effective legal services.',
  },
];

export const WhyNeonLaw = () => {
  return (
    <Section>
      <h2 className="heading--underlined">Why Neon Law?</h2>
      <p>A justice-first approach to law and litigation.</p>
      <div>
        {reasons.map((reason: ReasonProps, i) => (
          <Reason key={`${i}${reason.text.length}`} {...reason} />
        ))}
      </div>
    </Section>
  );
};
