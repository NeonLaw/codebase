import { AiOutlineShop } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import React from 'react';
import { RiAdminLine } from 'react-icons/ri';
import {
  SideNavContainer
} from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';
import {VscLaw} from 'react-icons/vsc';
import { useCurrentUserQuery } from '../../utils/api';

export const PortalSideNavContent = () => {
  const { data } = useCurrentUserQuery();
  const role = data?.getCurrentUser?.role;

  console.log('Role: ', role, data);

  const links = [
    { icon: <AiOutlineShop />, label: 'Portal', route: '/portal/' },
    { icon: <CgProfile />, label: 'Profile', route: '/portal/profile' },
    role === 'laywer' || role === 'admin' ? { 
      icon: <VscLaw />, label: 'Laywers', route: '/lawyers' } : null,
    role === 'admin' ? { 
      icon: <RiAdminLine />, label: 'Admin', route: '/admin' } : null,
    
  ];
  return <SideNavContent isRenderedOnDashboard={true} links={links} />;
};

export const PortalSideNav = (props) => {
  return (
    <SideNavContainer {...props} isRenderedOnDashboard={true}>
      <PortalSideNavContent />
    </SideNavContainer>
  );
};
