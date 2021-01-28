import React from 'react';
import { SideNavContainer } from './sideNavContainer';
import { SideNavContent } from './sideNavContent';

export const PortalSideNavContent = ({ links }: any) => (
  <SideNavContent isRenderedOnDashboard={true} links={links} />
);

export const PortalSideNavigation = (props) => (
  <SideNavContainer isRenderedOnDashboard={true} {...props}>
    <PortalSideNavContent links={props.links} />
  </SideNavContainer>
);
