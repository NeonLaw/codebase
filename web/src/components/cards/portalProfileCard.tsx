import { Skeleton, Text } from '@chakra-ui/react';
import { colors, gutters, shadows } from '../../styles/neonLaw';
import React from 'react';
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
  const { data, loading } = useCurrentUserQuery();
  if (loading)  {
    return <Skeleton height="20px" />;
  }
  if (data) {
    return (
      <StyledPortalProfileCard>
        <UserAvatar style="square" alt="Your Profile" />
        <Text data-testid="portal-profile-card-name">
          {data?.getCurrentUser?.name}
        </Text>
      </StyledPortalProfileCard>
    );
  }
  return null;
};
