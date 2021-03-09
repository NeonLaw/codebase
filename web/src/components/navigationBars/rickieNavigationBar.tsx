import { BaseNavigationBar } from './baseNavigationBar';
import { PublicSideNavContent } from '../sideNavigation/public';
import { useIntl } from 'react-intl';

export const RickieNavigationBar = () => {
  const intl = useIntl();

  const links = [
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.coronavirus'
      }),
      route: '/jfrs/coronavirus-in-prison'
    },
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.patrick_wayne_harper'
      }),
      route: '/jfrs/patrick-wayne-harper'
    },
    {
      label: intl.formatMessage({
        id: 'navigation.justice_for_rickie_slaughter.write_rickie'
      }),
      route: '/jfrs/write-rickie'
    }
  ];
  return (
    <BaseNavigationBar
      links={links}
      sideNavigationDrawer={<PublicSideNavContent />}
    />
  );
};
