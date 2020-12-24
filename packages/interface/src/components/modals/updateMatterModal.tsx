import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  theme,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { colors } from '../../themes/neonLaw';

export const UpdateMatterModal = ({ isOpen, onClose, matter }) => {
  const { id } = matter;
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="update-matter-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update a Matter
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <UpdateModalFormBuilder
            resourceName="matter"
            onClose={onClose}
            currentValues={{ id }}
            fields={[
              {
                name: 'name',
                required: true,
                type: 'string',
              },
              {
                name: 'matterTemplate',
                type: 'selectWithQuery'
              }
            ]}
          />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
