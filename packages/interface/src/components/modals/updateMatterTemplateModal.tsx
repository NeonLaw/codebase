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

interface UpdateMatterTemplateModalProps {
  isOpen: boolean;
  onClose(): void;
  id: string;
}

export const UpdateMatterTemplateModal = ({
  id,
  isOpen,
  onClose,
}: UpdateMatterTemplateModalProps) => {
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="update-matter-template-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Update Matter Template
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <UpdateModalFormBuilder
            resourceName="matterTemplate"
            onClose={onClose}
            id={id}
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
