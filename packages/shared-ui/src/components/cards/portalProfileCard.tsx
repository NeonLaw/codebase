import { colors, gutters, shadows } from '../../themes/neonLaw';

import React from 'react';
import { Text } from '@chakra-ui/core';
import { UserAvatar } from '../userAvatar';
import styled from '@emotion/styled';
import { useCurrentUserQuery } from '../../utils/api';

const StyledPortalProfileCard = styled.div`
  text-align: center;
  max-width: 200px;
  box-shadow: ${shadows.light2};
  transition: all .2s;

  &:hover {
    box-shadow: ${shadows.light15};
  }

  [data-testid="portal-profile-card-name"] {
    padding: ${gutters.xSmallOne};
    border: 1px solid ${colors.borders.light};
    font-weight: 600;
  }

  @media(max-width: 640px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PortalProfileCard = () => {
  const { data } = useCurrentUserQuery();
  return (
    <StyledPortalProfileCard>
      <UserAvatar style="square" alt="Your Profile" />
      <Text data-testid="portal-profile-card-name">
        {data?.getCurrentUser?.name}
      </Text>
    </StyledPortalProfileCard>
  );
};
