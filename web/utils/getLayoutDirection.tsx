import { useRouter } from 'next/router';

export const GetLayoutDirection = () => {
  const { locale  } = useRouter();

  return locale === 'ur' ? 'rtl' : 'ltr';
};
