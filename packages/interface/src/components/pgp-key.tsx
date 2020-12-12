import { Box, Tooltip } from '@chakra-ui/core';
import React, { useRef, useState } from 'react';
import { FlashButton } from '../components/button';
import copy from 'clipboard-copy';
import { gutters } from '../themes/neonLaw';

export const PGPKey = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const keyContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Box overflowX="scroll">
      <FlashButton
        aria-label="Copy PGP Key to Clip Board"
        containerStyles={{margin: `${gutters.xSmallOne} .5rem`}}
        onClick={() => {
          keyContainerRef.current
            ? copy(keyContainerRef.current.textContent || '')
            : null;
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <Tooltip
          label="Copied to Clipboard"
          isOpen={isOpen}
          placement="top"
          aria-label="Copied to Clipboard"
          hasArrow={true}
          transform={'translateY(-.5rem)'}
        >
          Copy to Clipboard
        </Tooltip>
      </FlashButton>
      <div ref={keyContainerRef}>{children}</div>
    </Box>
  );
};
