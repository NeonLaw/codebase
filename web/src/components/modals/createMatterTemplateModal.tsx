import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import { matterTemplateFields } from '../fields/matterTemplateFields';

export const CreateMatterTemplateModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="matterTemplate"
      onClose={onClose}
      isOpen={isOpen}
      fields={matterTemplateFields}
    />
  );
};
