import { AiOutlineAudit, AiOutlineShop } from 'react-icons/ai';
import { BiHomeHeart, BiPen } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaHands } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
import React from 'react';
import { RiAdminLine } from 'react-icons/ri';
import {
  SideNavContainer
} from './sideNavContainer';
import { SideNavContent } from './sideNavContent';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscLaw } from 'react-icons/vsc';
import { admins } from '@neonlaw/server/src/admins';
import { useAuth0 } from '@auth0/auth0-react';

export const PortalSideNavContent = ({ email }) => {
  const links = [
    {
      icon: <BiHomeHeart />,
      label: 'Dashboard',
      route: '/portal'
    },
    {
      icon: <BiPen />,
      label: 'Write Rickie',
      route: '/portal/write-rickie'
    },
    {
      icon: <TiDeleteOutline />,
      label: 'Data Deletion',
      route: '/portal/data-deletion'
    },
    {
      icon: <MdGavel />, label: 'Litigation', route: '/portal/litigation' },
    {
      icon: <FaHands />, label: 'Estate', route: '/portal/estate' },
    {
      icon: <AiOutlineShop />,
      label: 'Businesses',
      route: '/portal/businesses'
    },
    admins.includes(email) ? {
      icon: <AiOutlineAudit />, label: 'Audits', route: '/portal/audits'
    }: null,
    { icon: <CgProfile />, label: 'Settings', route: '/portal/settings' },
    admins.includes(email) ? {
      icon: <VscLaw />, label: 'Lawyers', route: '/portal/lawyers' } : null,
    admins.includes(email) ? {
      icon: <RiAdminLine />, label: 'Admin', route: '/portal/admin' } : null,

  ];

  return <SideNavContent isRenderedOnDashboard={true} links={links} />;
};

export const PortalSideNavigation = (props) => {
  const { user: { email }} = useAuth0();

  return (
    <SideNavContainer isRenderedOnDashboard={true} {...props}>
      <PortalSideNavContent email={email} />
    </SideNavContainer>
  );
};
