import { AiOutlineAudit, AiOutlineShop } from 'react-icons/ai';
import { BiHomeHeart, BiPen } from 'react-icons/bi';
import { AuthenticationContext } from '../../utils/authenticationContext';
import { CgProfile } from 'react-icons/cg';
import { FaHands } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
import React from 'react';
import { RiAdminLine } from 'react-icons/ri';
import {
  SideNavContainer
} from './sideNavContainer';
import { SideNavContent } from './base';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscLaw } from 'react-icons/vsc';

export const PortalSideNavContent = ({ role }) => {
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
    role === 'laywer' || role === 'admin' ? {
      icon: <AiOutlineAudit />, label: 'Audits', route: '/portal/audits'
    }: null,
    { icon: <CgProfile />, label: 'Settings', route: '/portal/settings' },
    role === 'laywer' || role === 'admin' ? {
      icon: <VscLaw />, label: 'Lawyers', route: '/lawyers' } : null,
    role === 'admin' ? {
      icon: <RiAdminLine />, label: 'Admin', route: '/admin' } : null,

  ];

  return <SideNavContent isRenderedOnDashboard={true} links={links} />;
};

export const PortalSideNavigation = (props) => {
  return (
    <AuthenticationContext.Consumer>
      {({ user: { role }}: any) => {

        return (
          <SideNavContainer isRenderedOnDashboard={true} {...props}>
            <PortalSideNavContent role={role} />
          </SideNavContainer>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};
