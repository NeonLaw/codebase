import React from 'react';
import { Text } from '@chakra-ui/core';
import { useCurrentUserQuery } from '@utils/api';

export const PortalProfileCard = () => {
  const { data } = useCurrentUserQuery();
  return (
    <Text>
      Your name: {data?.getCurrentUser?.name}
    </Text>
  );
};
