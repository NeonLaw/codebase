import { PublicLinks } from '../navigation/publicLinks';
import React from 'react';
import { SideNavContainer } from './sideNavContainer';
import { SideNavContent } from './sideNavContent';

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
