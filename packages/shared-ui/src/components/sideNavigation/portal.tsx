import { CgProfile } from 'react-icons/cg';
import { MdDashboard } from 'react-icons/md';
import React from 'react';
import { SideNavContainer } from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';

export const PortalSideNavContent = () => {
  const links = [
    { icon: <MdDashboard />, label: 'Dashboard', route: '/portal' },
    { icon: <CgProfile />, label: 'Profile', route: '/portal/profile' },
  ];
  return <SideNavContent isRenderedOnDashBoard={true} links={links} />;
};

export const PortalSideNav = (props) => {
  return (
    <SideNavContainer {...props} isRenderedOnPortal={true}>
      <PortalSideNavContent />
    </SideNavContainer>
  );
};
