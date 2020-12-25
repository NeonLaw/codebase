import React from 'react';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';

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
  );
};
