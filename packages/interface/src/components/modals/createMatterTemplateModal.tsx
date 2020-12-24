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

export const CreateMatterTemplateModal = ({ isOpen, onClose, onOpen }) => {
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="create-matter-template-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Create a Matter Template
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <CreateModalFormBuilder
            resourceName="matterTemplate"
            onClose={onClose}
            fields={[
              {
                name: 'name',
                type: 'string',
              },
              {
                name: 'javascriptModule',
                type: 'codeEditor',
              },
              {
                name: 'category',
                options: [
                  { label: 'Data Deletion', value: 'data-deletion' },
                  { label: 'Inmate Letter', value: 'inmate-letter' },
                  { label: 'Litigation', value: 'litigation' },
                  { label: 'Estate', value: 'estate' },
                  { label: 'Business', value: 'business' },
                ],
                type: 'select',
              },
            ]}
          />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
