import React from 'react';

import {
  SideNavContainer
} from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';

export const PortalSideNavContent = () => {
  const links = [
    { label: 'Dashboard', route: '/portal' },
    { label: 'Profile', route: '/portal/profile' }
  ];
  return (
    <SideNavContent links={links} />
  );
};


export const PortalSideNav = props => {
  return (
    <SideNavContainer {...props}>
      <PortalSideNavContent />
    </SideNavContainer>
  );
};
