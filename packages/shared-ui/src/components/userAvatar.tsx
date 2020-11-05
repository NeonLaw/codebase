import { AuthenticationContext } from '../utils/authenticationContext';
import { Avatar } from '@chakra-ui/core';
import React from 'react';
import styled from '@emotion/styled';

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

export const UserAvatar = ({ style, alt }: UserAvatarProps) => (
  <StyledUserAvatar>
    <AuthenticationContext.Consumer>
      {({ user: { name, picture } }: any) => {
        return style === 'square' ? (
          <img src={picture} alt={alt} className="avatar--square" />
        ) : (
          <Avatar size="sm" cursor="pointer" name={name} src={picture} />
        );
      }}
    </AuthenticationContext.Consumer>
  </StyledUserAvatar>
);
