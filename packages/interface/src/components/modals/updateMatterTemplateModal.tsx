import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { matterTemplateFields } from '../fields/matterTemplateFields';

interface UpdateMatterTemplateModalProps {
  onClose(): void;
  isOpen: boolean;
  id?: string;
}

export const UpdateMatterTemplateModal = ({
  id,
  isOpen,
  onClose,
}: UpdateMatterTemplateModalProps) => {
  return (
    <UpdateModalFormBuilder
      resourceName="matterTemplate"
      onClose={onClose}
      isOpen={isOpen}
      currentValues={{ id }}
      fields={matterTemplateFields}
    />
  );
};
