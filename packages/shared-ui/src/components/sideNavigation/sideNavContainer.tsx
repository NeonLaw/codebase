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

export const SideNavContainer = ({ children, isRenderedOnPortal }) => (
  <StyledSideNavContainer
    style={{
      display: isRenderedOnPortal ? 'block' : 'none',
      margin: isRenderedOnPortal ? 'auto' : '',
    }}
  >
    {children}
  </StyledSideNavContainer>
);
