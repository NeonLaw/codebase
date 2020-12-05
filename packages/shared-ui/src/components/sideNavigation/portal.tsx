
import { AiOutlineAudit, AiOutlineShop } from 'react-icons/ai';
import { BiHomeHeart, BiPen } from 'react-icons/bi';
// import { useAllMattersQuery, useCurrentUserQuery } from '../../utils/api';
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
  const { data: currentUserData } = useCurrentUserQuery();
  const role = currentUserData?.getCurrentUser?.role;

  if (!role) {
    return null;
  }

  // const { data: allMatterData } = useAllMattersQuery();
  // const matters = allMatterData?.allMatters?.nodes;
  // const uniqueMatterTemplateCategories = matters?.map((matter) => {
  //   return matterTemplateByMatterTemplateId.category;
  // });

  // const onlyUnique = (value, index, self) => {
  //   return self.indexOf(value) === index;
  // };

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

export const PortalSideNav = (props) => {
  return (
    <SideNavContainer isRenderedOnDashboard={true} {...props}>
      <PortalSideNavContent />
    </SideNavContainer>
  );
};
