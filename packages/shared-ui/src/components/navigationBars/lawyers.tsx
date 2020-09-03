import { BaseNavigationBar } from './base';
import { LawyersSideNavContent } from '../../components/sideNavigation/lawyers';
import React from 'react';

export const LawyersNavigationBar = () => {
  return (
    <BaseNavigationBar sideNavigationDrawer={<LawyersSideNavContent />} />
  );
};
