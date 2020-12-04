import Reason, { ReasonProps } from './reason';

import ChildrenStockPhoto from '../../images/children-stock-photo.jpg';
import Flowers from '../../images/flowers.jpg';
import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import { useIntl } from 'gatsby-plugin-intl';

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
      image: ChildrenStockPhoto,
      text: intl.formatMessage({ id: 'why_neon_law.good_causes.text' }),
      title: intl.formatMessage({
        id: 'why_neon_law.good_causes.title',
      }),
    },
    {
      image: Flowers,
      text: intl.formatMessage({
        id: 'why_neon_law.tech-to-make-affordable.text',
      }),
      title: intl.formatMessage({
        id: 'why_neon_law.tech-to-make-affordable.title',
      }),
    },
  ];
  return (
    <Section>
      <h2 className="heading--underlined">
        {intl.formatMessage({ id: 'why_neon_law.heading' })}
      </h2>
      <p>{intl.formatMessage({ id: 'why_neon_law.sub_text' })}</p>
      <div>
        {reasons.map((reason: ReasonProps, i) => (
          <Reason key={`${i}${reason.text.length}`} {...reason} />
        ))}
      </div>
    </Section>
  );
};
