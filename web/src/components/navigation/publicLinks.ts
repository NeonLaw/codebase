import { useIntl } from 'react-intl';

export const PublicLinks = () => {
  const intl = useIntl();

  return [
    {
      label: intl.formatMessage({ id: 'navigation_public.services' }),
      route: '/practice-areas'
    },
    {
      label: intl.formatMessage({ id: 'navigation_public.templates' }),
      route: '/templates'
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
