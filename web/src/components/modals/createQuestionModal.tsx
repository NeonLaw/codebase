import { CreateModalFormBuilder } from '../forms/createModalFormBuilder';
import { questionFields } from '../fields/questionFields';

export const CreateQuestionModal = ({ isOpen, onClose }) => {
  return (
    <CreateModalFormBuilder
      resourceName="question"
      isOpen={isOpen}
      onClose={onClose}
      fields={questionFields}
    />
  );
};
