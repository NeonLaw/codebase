import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  theme,
  useColorMode,
} from '@chakra-ui/core';
import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import React from 'react';
import { colors } from '../../themes/neonLaw';

export const CreateMatterModal = ({ isOpen, onClose }) => {
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="create-matter-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Create a Matter
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <CreateModalFormBuilder
            resourceName="matter"
            onClose={onClose}
            fields={[
              {
                name: 'name',
                required: true,
                type: 'string',
              },
              {
                labelColumn: 'name',
                name: 'matterTemplateId',
                queryName: 'allMatterTemplates',
                type: 'selectWithQuery'
              },
              {
                labelColumn: 'email',
                name: 'primaryContactId',
                queryName: 'allPeople',
                type: 'selectWithQuery'
              }
            ]}
          />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
