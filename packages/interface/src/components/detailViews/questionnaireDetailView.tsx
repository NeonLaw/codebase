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
      <h1>Questionnaire &nbsp;{JSON.stringify(data)}</h1>
    );
  }

  return null;
};
