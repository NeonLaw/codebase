import { useUser } from '@auth0/nextjs-auth0';

const admins = [
  'nick@neonlaw.com',
  'admin@sink.sendgrid.com'
];

export const AdminOnly = ({ children }) => {
  const { user: { email } } = useUser();

  if (admins.includes(email)) {
    return (<>{children}</>);
  }

  return null;
};
