import React from 'react';

import {
  SideNavContainer
} from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';

export const LawyersSideNavContent = () => {
  const links = [
    { label: 'Dashboard', route: '/lawyers' },
    { label: 'Firm Settings', route: '/lawyers/firm-settings' }
  ];
  return (
    <SideNavContent links={links} />
  );
};


export const LawyersSideNav = props => {
  return (
    <SideNavContainer {...props}>
      <LawyersSideNavContent />
    </SideNavContainer>
  );
};
