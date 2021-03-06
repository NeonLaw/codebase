import { AiOutlineShop } from 'react-icons/ai';
import { BiHomeHeart } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaHands } from 'react-icons/fa';
import { MdGavel } from 'react-icons/md';
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
      label: 'Business',
      route: '/portal/business',
    },
    {
      icon: <FaHands />,
      label: 'Estate',
      route: '/portal/estate',
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
