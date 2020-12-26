import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { matterTemplateFields } from '../fields/matterTemplateFields';

interface UpdateMatterTemplateModalProps {
  onClose(): void;
  isOpen: boolean;
  currentValues: any;
}

export const UpdateMatterTemplateModal = ({
  currentValues,
  isOpen,
  onClose,
}: UpdateMatterTemplateModalProps) => {
  return (
    <UpdateModalFormBuilder
      resourceName="matterTemplate"
      onClose={onClose}
      isOpen={isOpen}
      currentValues={currentValues}
      fields={matterTemplateFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
