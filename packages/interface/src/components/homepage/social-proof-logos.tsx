import React from 'react';
import { Section } from '../section';
import { gutters } from '../../themes/neonLaw';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledLogosContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 945px) {
    overflow-x: scroll;
  }

  svg {
    height: 5em;
    max-width: 8em;
    min-width: 6.5em;
    fill: #888;

    &:not(:last-child) {
      margin-right: ${gutters.small};
    }
  }
`;

interface Org {
  name: string;
  logo: JSX.Element;
}

const orgs: Org[] = [
];

export const SocialProofLogos = () => {
  const intl = useIntl();

  return (
    <Section>
      <h2>{intl.formatMessage({ id: 'worked_with.title' })}</h2>
      <StyledLogosContainer>
        {orgs.map((org: Org) => org.logo)}
      </StyledLogosContainer>
    </Section>
  );
};
