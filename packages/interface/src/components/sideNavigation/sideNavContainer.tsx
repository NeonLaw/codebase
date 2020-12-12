import React from 'react';
import styled from '@emotion/styled';

const StyledSideNavContainer = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  top: 0;
  right: 0;
  max-width: 12em;

  @media (max-width: 800px) {
    max-width: 9em;
  }

  @media (max-width: 640px) {
    max-width: 5em;
  }
`;

interface SideNavContainerProps {
  children: JSX.Element
  isRenderedOnDashboard?: boolean
}

export const SideNavContainer = ({
  children, isRenderedOnDashboard
}: SideNavContainerProps) => (
  <StyledSideNavContainer
    style={{
      display: isRenderedOnDashboard ? 'block' : 'none',
      margin: isRenderedOnDashboard ? 'auto' : '',
    }}
  >
    {children}
  </StyledSideNavContainer>
);
