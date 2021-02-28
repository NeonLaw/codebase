import { Flex, Text } from '@chakra-ui/react';

import React from 'react';
import { useIntl } from 'react-intl';

export const BlackLivesMatter = () => {
  const intl = useIntl();

  return (
    <Flex
      as="header"
      position="fixed"
      bg="black"
      color="white"
      height="2em"
      width="full"
      zIndex={4}
      alignItems="center"
    >
      <Text flex="1" textAlign="center">
        {intl.formatMessage({ id: 'blm.text' })}
      </Text>
    </Flex>
  );
};
