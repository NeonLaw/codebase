import {
  Box,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/core';
import React, { useEffect } from 'react';
import { colors, shadows, theme } from '../themes/neonLaw';

import { Button } from './button';
import styled from '@emotion/styled';

const StyledShortCut = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  font-size: 95%;
  border: 1px solid;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .key {
    font-weight: 600;
    padding: 0.2rem 0.8rem;
    border: 1px solid;
    border-radius: 5px;
    box-shadow: ${shadows.light2};
  }

  body.user-is-tabbing &:focus {
    outline: var(--outline);
  }
`;

interface Shortcut {
  description: string;
  key: string;
}

const shortcuts: Shortcut[] = [
  {
    description: 'Focus search bar',
    key: '/',
  },
  {
    description: 'Submit form',
    key: 'Shift + Enter'
  },
  {
    description: 'Show all keyboard shortcuts',
    key: 'Shift + /',
  },
];

export const ShortcutsModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const handleOpenModal = (e: any) => {
    if (e.key == '?') {
      // detect Shift + / i.e '?'
      onOpen();
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleOpenModal);

    return (): void => {
      window.removeEventListener('keyup', handleOpenModal);
    };
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay zIndex="5">
          <ModalContent>
            <ModalHeader fontSize={theme.fontSizes.xl1}>
              Keyboard Shortcuts
            </ModalHeader>

            <ModalBody>
              <Box as="ul" listStyleType="none">
                {shortcuts.map(({ key, description }: Shortcut) => (
                  <StyledShortCut
                    key={key}
                    style={{ borderColor: colors.borders[colorMode] }}
                    tabIndex={0}
                  >
                    <div className="desc">{description}</div>
                    <div
                      className="key"
                      style={{
                        background: colors.background[colorMode],
                        borderColor: colors.borders[colorMode],
                      }}
                    >
                      {key}
                    </div>
                  </StyledShortCut>
                ))}
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
};
