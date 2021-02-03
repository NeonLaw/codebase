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
        <p>{JSON.stringify(data.questionnaireById?.questionTree)}</p>
      </>
    );
  }

  return null;
};
