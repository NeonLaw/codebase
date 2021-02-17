import { Reason, ReasonProps } from './reason';

import React from 'react';
import { Section } from '../section';
import { useIntl } from 'react-intl';

export const WhyNeonLaw = () => {
  const intl = useIntl();


  const reasons: ReasonProps[] = [
    {
      text: intl.formatMessage({ id: 'why_neon_law.good_people.text' }),
      title: intl.formatMessage({
        id: 'why_neon_law.good_people.title',
      }),
    },
    {
      image: '/images/children-stock-photo.jpg',
      text: intl.formatMessage({ id: 'why_neon_law.good_causes.text' }),
      title: intl.formatMessage({
        id: 'why_neon_law.good_causes.title',
      }),
    },
    {
      image: '/images/flowers.jpg',
      text: intl.formatMessage({
        id: 'why_neon_law.tech-to-make-affordable.text',
      }),
      title: intl.formatMessage({
        id: 'why_neon_law.tech-to-make-affordable.title',
      }),
    },
  ];
  return (
    <Section
      title={intl.formatMessage({ id: 'why_neon_law.heading' })}
    >
      <p>{intl.formatMessage({ id: 'why_neon_law.sub_text' })}</p>
      <div>
        {reasons.map((reason: ReasonProps, i) => (
          <Reason key={`${i}${reason.text.length}`} {...reason} />
        ))}
      </div>
    </Section>
  );
};
