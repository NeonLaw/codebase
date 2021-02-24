import { useIntl } from 'react-intl';

export const PublicLinks = () => {
  const intl = useIntl();

  return [
    {
      label: intl.formatMessage({ id: 'navigation_public.ventures' }),
      route: '/ventures'
    },
    {
      label: intl.formatMessage({ id: 'navigation_public.trusts' }),
      route: '/trusts'
    },
    {
      label: intl.formatMessage({ id: 'navigation_public.litigation' }),
      route: '/litigation'
    },
    {
      label: intl.formatMessage({ id: 'navigation_public.blog' }),
      route: '/blog'
    },
    {
      label: intl.formatMessage({ id: 'navigation_public.contact' }),
      route: '/contact'
    }
  ];
};
