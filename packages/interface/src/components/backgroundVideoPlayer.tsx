import React from 'react';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';

const StyledBackgroundVideo  = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


export const BackgroundVideoPlayer = ({ backgroundVideoUrl }) => {
  return (
    <StyledBackgroundVideo>
      <ReactPlayer
        url={backgroundVideoUrl}
        width="100%"
        height="100%"
        playing={true}
        controls={false}
        playsinline={true}
        volume={0}
        muted={true}
        loop={true}
      />
    </StyledBackgroundVideo>
  );
};
