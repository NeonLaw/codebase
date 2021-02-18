import { BaseNavigationBar } from './baseNavigationBar';
import { PublicLinks } from '../navigation/publicLinks';
import { PublicSideNavContent } from '../sideNavigation/public';
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
