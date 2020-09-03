import { BaseNavigationBar } from './base';
import { PortalSideNavContent } from '../../components/sideNavigation/portal';
import React from 'react';

export const PortalNavigationBar = () => {
  return (
    <BaseNavigationBar sideNavigationDrawer={<PortalSideNavContent />} />
  );
};
