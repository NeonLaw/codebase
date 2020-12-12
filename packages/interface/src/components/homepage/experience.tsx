import { colors, gutters } from '../../themes/neonLaw';

import React from 'react';
import { Section } from '../section';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledExperience = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 660px) {
    flex-direction: column;
  }

  .box {
    flex: 0 0 30%;
    @media (max-width: 660px) {
      max-width: 300px;
      margin: auto;

      &:not(:last-child) {
        margin-bottom: ${gutters.medium};
      }
    }
  }

  h3 {
    color: ${colors.primaryColor400};
  }
`;

export const Experience = () => {
  const intl = useIntl();

  const experiences = [
    {
      text: intl.formatMessage({ id: 'experience.client_engagements.text' }),
      title: intl.formatMessage({ id: 'experience.client_engagements.title' }),
    },
    {
      text: intl.formatMessage({ id: 'experience.years.text' }),
      title: intl.formatMessage({ id: 'experience.years.title' }),
    },
    {
      text: intl.formatMessage({
        id: 'experience.recommendation_percentage.text',
      }),
      title: intl.formatMessage({
        id: 'experience.recommendation_percentage.title',
      }),
    },
  ];

  return (
    <Section>
      <StyledExperience>
        {experiences.map(
          ({ title, text }: { title: string; text: string }) => (
            <div key={title} className="box">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          )
        )}
      </StyledExperience>
    </Section>
  );
};
