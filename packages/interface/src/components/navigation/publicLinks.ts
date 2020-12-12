import { useIntl } from 'gatsby-plugin-intl';


export const PublicLinks = () => {
  const intl = useIntl();
  const links = [
    {
      label: intl.formatMessage({ id: 'navigation_publicL.upward' }),
      route: '/upward-mobility'
    },
    {
      label: intl.formatMessage({ id: 'navigation_publicL.practiceAreas' }),
      route: '/practice-areas'
    },
    {
      label: intl.formatMessage({ id: 'navigation_publicL.blog' }),
      route: '/blog'
    },
    {
      label: intl.formatMessage({ id: 'navigation_publicL.contact' }),
      route: '/contact'
    }
  ];

  return (
    links
  );
};
