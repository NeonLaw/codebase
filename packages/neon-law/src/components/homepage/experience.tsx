import { colors, gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';

import React from 'react';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import styled from '@emotion/styled';

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
    color: ${colors.cyanLight};
  }
`;

export const Experience = () => (
  <Section>
    <StyledExperience>
      <div className="box">
        <h3>0,000+</h3>
        <p>client engagements Lorem, ipsum dolor sit amet dolor.</p>
      </div>
      <div className="box">
        <h3>10+ Years</h3>
        <p>of average experience among our lawyers, Lorem ipsum dolor.</p>
      </div>
      <div className="box">
        <h3>99%</h3>
        <p>of clients say they would recommend NeonLaw. Lorem ipsum dolor.</p>
      </div>
    </StyledExperience>
  </Section>
);

export default Experience;
