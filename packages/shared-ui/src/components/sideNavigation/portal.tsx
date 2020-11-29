
import { AiOutlineAudit, AiOutlineShop } from 'react-icons/ai';
import { BiHomeHeart, BiPen } from 'react-icons/bi';
import { useAllMattersQuery, useCurrentUserQuery } from '../../utils/api';
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

export const PortalSideNavContent = () => {
  const { data: currentUserData } = useCurrentUserQuery();
  const role = currentUserData?.getCurrentUser?.role;

  if (!role) {
    return null;
  }

  const { data: allMatterData } = useAllMattersQuery();
  const matters = allMatterData?.allMatters?.nodes;
  const uniqueMatterTemplateCategories = matters?.map((matter) => {
    return matterTemplateByMatterTemplateId.category;
  });

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };


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
    uniqueMatterTemplates?.find((t) => t ==='data-deletion') && {
      icon: <TiDeleteOutline />,
      label: 'Data Deletion',
      route: '/portal/data-deletion'
    },
    uniqueMatterTemplates?.find((t) => t ==='litigation') && {
      icon: <MdGavel />, label: 'Litigation', route: '/portal/litigation' },
    uniqueMatterTemplates?.find((t) => t ==='estate') && {
      icon: <FaHands />, label: 'Estate', route: '/portal/estate' } : null,
    uniqueMatterTemplates?.find((t) => t ==='business') && {
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

export const PortalSideNav = (props) => {
  return (
    <SideNavContainer {...props} isRenderedOnDashboard={true}>
      <PortalSideNavContent />
    </SideNavContainer>
  );
};
