import { Box, Text } from '@chakra-ui/core';
import { colors, gutters } from '../../themes/neonLaw';

import InActionBG from '../../images/in-action-bg.jpg';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

export const InAction = (): JSX.Element => {
  const intl = useIntl();

  return (
    <Box
      as="div"
      textAlign="center"
      background={`
        linear-gradient(rgba(0,0,0, .7), rgba(0,0,0, .9)),
        url(${InActionBG})
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
