import { ChevronUpIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';

const getLanguageId = (name) => {
  if (name === 'English') {
    return 'en';
  } else if (name === 'Spanish (Latin America)') {
    return 'es';
  } else if (name === 'Urdu') {
    return 'ur';
  }
};

export const LanguageDropdown = () => {
  const { locales, locale, pathname, push  } = useRouter();
  const intl = useIntl();

  const handleChange = (event) => {
    event.preventDefault();
    push(pathname, pathname, { locale: event.target.value });
  };

  return (
    <Select icon={<ChevronUpIcon />} value={locale} onChange={handleChange}>
      {locales.map((locale, index) => (
        <option key={index} value={locale}>
          {intl.formatMessage({id: `languages.${getLanguageId(name)}`})}
        </option>
      ))}
    </Select>
  );
};
