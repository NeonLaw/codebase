import React from 'react';
import { Skeleton } from '@chakra-ui/core';
import { UpdateModalFormBuilder } from '../forms/updateModalFormBuilder';
import { questionFields } from '../fields/questionFields';
import { useQuestionByIdQuery } from '../../utils/api';

export const UpdateQuestionModal = ({ isOpen, onClose, questionId }) => {
  const { data, loading } = useQuestionByIdQuery(
    { variables: { id: questionId }}
  );

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const currentValues = data.questionById;

    return (
      <UpdateModalFormBuilder
        resourceName="question"
        currentValues={currentValues}
        isOpen={isOpen}
        onClose={onClose}
        fields={questionFields.concat({ name: 'id', type: 'id' })}
      />
    );
  }

  return null;
};
