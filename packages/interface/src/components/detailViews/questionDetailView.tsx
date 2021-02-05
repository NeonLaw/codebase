import React from 'react';
import { Skeleton } from '@chakra-ui/core';
import { convertSlateToPlaintext } from '../../utils/slate';
import { useQuestionByIdQuery } from '../../utils/api';

export const QuestionDetailView = ({ id }) => {
  const { data, loading } = useQuestionByIdQuery(
    { variables: { id }}
  );


  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <>
        <h2>{data.questionById?.prompt}</h2>
        <p>{convertSlateToPlaintext(data.questionById?.helpText)}</p>
      </>
    );
  }

  return null;
};
