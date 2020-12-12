import { BaseNavigationBar } from './baseNavigationBar';
import { PublicLinks } from '../../components/navigation/publicLinks';
import { PublicSideNavContent } from '../../components/sideNavigation/public';
import React from 'react';

export const PublicNavigationBar = () => {
  const publicLinks = PublicLinks();
  return (
    <BaseNavigationBar
      links={publicLinks}
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
