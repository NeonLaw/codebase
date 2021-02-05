import { QuestionDetailView } from './questionDetailView';
import React from 'react';
import { Skeleton } from '@chakra-ui/core';
import { useQuestionnaireByIdQuery } from '../../utils/api';

export const QuestionnaireDetailView = ({ id }) => {
  const { data, loading } = useQuestionnaireByIdQuery(
    { variables: { id }}
  );


  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <>
        <h1>Questionnaire</h1>
        <QuestionDetailView id={data.questionnaireById?.questionTree.begin} />
      </>
    );
  }

  return null;
};
