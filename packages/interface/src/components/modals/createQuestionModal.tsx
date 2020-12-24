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

/* eslint-disable-next-line */
export const CreateQuestionModal = ({ isOpen, onClose, onOpen }) => {
  const { colorMode } = useColorMode();

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay>
        <ModalContent
          data-testid="create-question-modal"
          margin="8em 2em 0 2em"
        >
          <ModalHeader
            fontWeight="normal"
            fontSize={theme.fontSizes['xl0']}
            color={colors.text[colorMode]}
          >
            Create a Question
          </ModalHeader>
          <ModalCloseButton style={{ color: colors.text[colorMode] }} />
          <CreateModalFormBuilder
            resourceName="question"
            onClose={onClose}
            fields={[
              {
                name: 'prompt',
                required: true,
                type: 'string',
              },
              {
                name: 'questionType',
                options: [
                  { label: 'Single Choice', value: 'single-choice' },
                  { label: 'Single Date', value: 'single-date' },
                  {
                    label: 'Single File Upload',
                    value: 'single-file-upload'
                  },
                ],
                type: 'select',
              }
            ]}
          />
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
