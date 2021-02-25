import React from 'react';
import styled from '@emotion/styled';

const StyledBackgroundImage = styled.div`
    min-height: 300px;
    background-size: cover;
    background-position: center;
`;

interface BackgroundImageProps {
  src: string;
}

export const BackgroundImage = ({ src }: BackgroundImageProps) => (
  <StyledBackgroundImage style={{ backgroundImage: `url(/images/${src})` }} />
);
