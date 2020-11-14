
import { AiOutlineAudit, AiOutlineShop } from 'react-icons/ai';
import { BiHomeHeart } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaHands } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
import React from 'react';
import { RiAdminLine } from 'react-icons/ri';
import {
  SideNavContainer
} from '../../components/sideNavigation/sideNavContainer';
import { SideNavContent } from '../../components/sideNavigation/base';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscLaw } from 'react-icons/vsc';
import { useCurrentUserQuery } from '../../utils/api';

export const PortalSideNavContent = () => {
  const { data } = useCurrentUserQuery();
  const role = data?.getCurrentUser?.role;

  const links = [
    {
      icon: <BiHomeHeart />,
      label: 'Dashboard',
      route: '/portal'
    },
    {
      icon: <TiDeleteOutline />,
      label: 'Data Deletion',
      route: '/portal/data-deletion'
    },
    { icon: <MdGavel />, label: 'Litigation', route: '/portal/litigation' },
    { icon: <FaHands />, label: 'Estate', route: '/portal/estate' },
    {
      icon: <AiOutlineShop />,
      label: 'Businesses',
      route: '/portal/businesses'
    },
    { icon: <AiOutlineAudit />, label: 'Audits', route: '/portal/audits' },
    { icon: <CgProfile />, label: 'Profile', route: '/portal/profile' },
    role === 'laywer' || role === 'admin' ? {
      icon: <VscLaw />, label: 'Lawyers', route: '/lawyers' } : null,
    role === 'admin' ? {
      icon: <RiAdminLine />, label: 'Admin', route: '/admin' } : null,

  ];
  return <SideNavContent isRenderedOnDashboard={true} links={links} />;
};

export const PortalSideNav = (props) => {
  return (
    <SideNavContainer {...props} isRenderedOnDashboard={true}>
      <PortalSideNavContent />
    </SideNavContainer>
  );
};
