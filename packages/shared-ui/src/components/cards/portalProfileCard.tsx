import { Box, Text } from '@chakra-ui/core';
import React from 'react';
import { useCurrentUserQuery } from '../../utils/api';

export const PortalProfileCard = () => {
  const { data } = useCurrentUserQuery();
  return (
    <Box
      border="1px"
      borderColor="gray.500"
      padding="1rem"
      borderRadius="5px"
    >
      <Text data-testid="portal-profile-card-name">
        Your name: {data?.getCurrentUser?.name}
      </Text>
    </Box>
  );
};
