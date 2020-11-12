import { BaseNavigationBar } from './base';
import { PortalSideNavContent } from '../../components/sideNavigation/portal';
import React from 'react';

export const PortalNavigationBar = ({
  isRenderedOnDashboard
}: { isRenderedOnDashboard?: boolean}) => {
  return (
    <BaseNavigationBar
      isRenderedOnDashboard={isRenderedOnDashboard}
      sideNavigationDrawer={<PortalSideNavContent />}
    />
  );
};
