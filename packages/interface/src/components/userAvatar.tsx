import { Avatar } from '@chakra-ui/core';
import React from 'react';
import styled from '@emotion/styled';
import { useAuth0 } from '@auth0/auth0-react';

const StyledUserAvatar = styled.div`
    .avatar--square {
        display: block;
        width: 100%;
    }
`;

interface UserAvatarProps {
  style?: 'square';
  alt?: string;
}

export const UserAvatar = ({ style, alt }: UserAvatarProps) => {
  const { user: { name, picture } } = useAuth0();
  return (
    <StyledUserAvatar>
      {style === 'square' ? (
        <img src={picture} alt={alt} className="avatar--square" />
      ) : (
        <Avatar size="sm" cursor="pointer" name={name} src={picture} />
      )}
    </StyledUserAvatar>
  );
};
