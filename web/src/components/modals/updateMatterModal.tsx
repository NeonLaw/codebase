import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { matterFields } from '../fields/matterFields';

export const UpdateMatterModal = ({ isOpen, onClose, currentValues }) => {
  return (
    <UpdateModalFormBuilder
      isOpen={isOpen}
      resourceName="matter"
      onClose={onClose}
      currentValues={currentValues}
      fields={matterFields.concat({ name: 'id', type: 'id' })}
    />
  );
};
