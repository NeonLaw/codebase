import { Avatar } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import { useUser } from '@auth0/nextjs-auth0';

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
  const { user: { name, picture } } = useUser();
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
