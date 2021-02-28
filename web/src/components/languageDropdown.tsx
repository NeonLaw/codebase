import { useNextIntl, withNextIntl } from '@moxy/next-intl';

import { ChevronUpIcon } from '@chakra-ui/icons';
import { Select } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useIntl } from 'react-intl';

const getLanguageId = (name) => {
  if (name === 'English') {
    return 'en';
  } else if (name === 'Spanish (Latin America)') {
    return 'es';
  } else if (name === 'Urdu') {
    return 'ur';
  }
};

const Dropdown = () => {
  const { locales, locale, changeLocale } = useNextIntl();
  const intl = useIntl();

  const handleChange = useCallback(
    (event) => changeLocale(event.target.value),
    [changeLocale],
  );

  return (
    <Select icon={<ChevronUpIcon />} value={locale.id} onChange={handleChange}>
      {locales.map(({ id, name }) => (
        <option key={id} value={id}>
          {intl.formatMessage({id: `languages.${getLanguageId(name)}`})}
        </option>
      ))}
    </Select>
  );
};

export const LanguageDropdown = withNextIntl(Dropdown);
