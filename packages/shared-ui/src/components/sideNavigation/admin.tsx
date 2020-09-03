import React from 'react';

import {
  SideNavContainer
} from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';

export const AdminSideNavContent = () => {
  const links = [
    { label: 'Dashboard', route: '/admin' },
    { label: 'Flashcards', route: '/admin/flashcards' },
  ];
  return (
    <SideNavContent links={links} />
  );
};


export const AdminSideNav = (props) => {
  return (
    <SideNavContainer {...props}>
      <AdminSideNavContent />
    </SideNavContainer>
  );
};
