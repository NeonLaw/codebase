import { ChevronUpIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const getLocaleInfo = (locale) => {
  if (locale === 'en-US') {
    return ['English', 'en'];
  } else if (locale === 'es-419') {
    return ['Spanish (Latin America)', 'es'];
  } else if (locale === 'ur') {
    return ['Urdu', 'ur'];
  }
};

const Dropdown = () => {
  const router = useRouter();
  const { locale, locales } = router;
  const intl = useIntl();

  const handleChange = (e) => {
    const loc = e.target.value;
    router.push('/', '/', { locale: loc });
  };

  return (
    <Select icon={<ChevronUpIcon />} value={locale} onChange={handleChange}>
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {intl.formatMessage({ id: `languages.${getLocaleInfo(locale)[1]}` })}
        </option>
      ))}
    </Select>
  );
};

export const LanguageDropdown = Dropdown;
