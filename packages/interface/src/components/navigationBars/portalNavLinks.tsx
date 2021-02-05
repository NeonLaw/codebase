import { BiBook, BiHomeHeart, BiPen } from 'react-icons/bi';
import { AiOutlineShop } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHands } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
import React from 'react';
import { RiAdminLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscLaw } from 'react-icons/vsc';
import { admins } from '@neonlaw/server/src/admins';

export const portalNavLinks = ({ email }) => {
  return [
    {
      icon: <BiHomeHeart />,
      label: 'Dashboard',
      route: '/portal',
    },
    {
      icon: <BiPen />,
      label: 'Write Rickie',
      route: '/portal/write-rickie',
    },
    {
      icon: <TiDeleteOutline />,
      label: 'Data Deletion',
      route: '/portal/data-deletion',
    },
    {
      icon: <MdGavel />,
      label: 'Litigation',
      route: '/portal/litigation',
    },
    {
      icon: <FaHands />,
      label: 'Estate & Trust',
      route: '/portal/estate',
    },
    {
      icon: <AiOutlineShop />,
      label: 'Businesses',
      route: '/portal/businesses',
    },
    {
      icon: <BiBook />,
      label: 'Bar Prep',
      route: '/portal/bar-prep',
    },
    { icon: <CgProfile />, label: 'Settings', route: '/portal/settings' },
    admins.includes(email)
      ? {
        icon: <VscLaw />,
        label: 'Lawyers',
        route: '/portal/lawyers',
      }
      : null,
    admins.includes(email)
      ? {
        icon: <RiAdminLine />,
        label: 'Admin',
        route: '/portal/admin',
      }
      : null,
  ];
};
