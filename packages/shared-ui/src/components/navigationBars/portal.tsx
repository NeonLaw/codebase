import { BaseNavigationBar } from './base';
import { PortalSideNavContent } from '../../components/sideNavigation/portal';
import React from 'react';

export const PortalNavigationBar = ({ portal }: { portal?: boolean}) => {
  return (
    <BaseNavigationBar 
      portal={portal}
      sideNavigationDrawer={<PortalSideNavContent />} 
    />
  );
};
