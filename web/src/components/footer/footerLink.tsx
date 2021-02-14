import { Box } from '@chakra-ui/react';
import { Link } from '../link';
import React from 'react';
// import { useIntl } from 'gatsby-plugin-intl';

// export const FooterLink = ({ path, i18nMessage }) => {
export const FooterLink = ({ path }) => {
  // const intl = useIntl();

  return (
    <Box as={Link} to={path} padding="7px 0">
      Hi
      {/* {intl.formatMessage({ id: i18nMessage })} */}
    </Box>
  );
};
