import { Box, Text } from '@chakra-ui/react';
import { colors, gutters } from '../../styles/neonLaw';

import React from 'react';
import { useIntl } from 'react-intl';

export const InAction = (): JSX.Element => {
  const intl = useIntl();

  return (
    <Box
      as="div"
      textAlign="center"
      background={`
        linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .9)),
        url('/images/in-action-bg.jpg')
      `}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      padding={`${gutters.largeOne} 0`}
      color={colors.text.dark}
    >
      <h2>{intl.formatMessage({ id: 'in_action.title' })}</h2>
      <Text
        maxWidth="500px"
        minWidth="auto"
        margin={`${gutters.xSmall} auto 0`}
      >
        {intl.formatMessage({ id: 'in_action.sub_text' })}
      </Text>
    </Box>
  );
};
