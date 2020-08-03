import { AdminSideNavContent } from '../../components/sideNavigation/admin';
import { BaseNavigationBar } from './base';
import React from 'react';

export const AdminNavigationBar = () => {
  return (
    <BaseNavigationBar sideNavigationDrawer={<AdminSideNavContent />} />
  );
};
