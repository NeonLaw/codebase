import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useIntl } from 'react-intl';

export const FooterLink = ({ path, i18nMessage }) => {
  const intl = useIntl();

  return (
    <Link href={path} passHref>
      <Box as="a" display="block" padding="7px 0" textDecoration="none">
        {intl.formatMessage({ id: i18nMessage })}
      </Box>
    </Link>
  );
};
