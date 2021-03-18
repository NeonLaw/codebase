import { useNextIntl } from '@moxy/next-intl';

export const GetLayoutDirection = () => {
  const { locale } = useNextIntl();

  return locale.name === 'Urdu' ? 'rtl' : 'ltr';
};
