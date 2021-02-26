import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useIntl } from 'react-intl';

export const LoadingPage = () => {
  const intl = useIntl();

  return (
    <Flex alignItems="center" minHeight="100vh">
      <Flex justifyContent="center" width="100%">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text>{intl.formatMessage({ id: 'loading' })}</Text>
          <Spinner
            thickness="4px"
            speed="1s"
            emptyColor="gray.200"
            color="cyan.500"
            size="xl"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
