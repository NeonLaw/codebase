import { BiBook, BiHomeHeart } from 'react-icons/bi';
import { AiOutlineShop } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FaHands } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
import React from 'react';
import { RiAdminLine } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { VscLaw } from 'react-icons/vsc';

const admins = [
  'nick@neonlaw.com',
  'admin@sink.sendgrid.com'
];

export const portalNavLinks = ({ email }) => {
  const baseLinks = [
    {
      icon: <BiHomeHeart />,
      label: 'Dashboard',
      route: '/portal',
    },
    {
      icon: <AiOutlineShop />,
      label: 'Businesses',
      route: '/portal/business',
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
      icon: <TiDeleteOutline />,
      label: 'Data Deletion',
      route: '/portal/data-deletion',
    },
    {
      icon: <BiBook />,
      label: 'Bar Prep',
      route: '/portal/bar-prep',
    },
    { icon: <CgProfile />, label: 'Settings', route: '/portal/settings' }
  ];

  if (admins.includes(email)) {
    baseLinks.push({
      icon: <VscLaw />,
      label: 'Lawyers',
      route: '/portal/lawyers',
    });
    baseLinks.push({
      icon: <RiAdminLine />,
      label: 'Admin',
      route: '/portal/admin',
    });
  }
  return baseLinks;
};
