import { PublicLinks } from '../../components/navigation/publicLinks';
import React from 'react';
import {
  SideNavContainer
} from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';

export const PublicSideNavContent = () => {
  const publicLinks = PublicLinks();

  return (
    <SideNavContent links={publicLinks} />
  );
};

export const PublicSideNav = () => {
  return (
    <SideNavContainer>
      <PublicSideNavContent />
    </SideNavContainer>
  );
};
