import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Button } from '../button';
import { QuestionDetailView } from './questionDetailView';
import { Skeleton } from '@chakra-ui/react';
import { useQuestionnaireByIdQuery } from '../../utils/api';

export const QuestionnaireDetailView = ({ id }) => {
  const { data, loading } = useQuestionnaireByIdQuery(
    { variables: { id }}
  );
  const [currentQuestion, changeCurrentQuestion] = useState(undefined as any);

  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <>
        <h1>{data?.questionnaireById?.name}</h1>
        <QuestionDetailView id={currentQuestion} />

        <Box padding="1em" />

        {currentQuestion ? (
          <Button width="100%" onClick={() => {
            changeCurrentQuestion(
              data.questionnaireById?.questionTree[currentQuestion]
            );
          }}>
            Next Question
          </Button>
        ) : (
          <Button width="100%" onClick={() => {
            changeCurrentQuestion(data.questionnaireById?.questionTree.begin);
          }}>
            Begin Questionnaire
          </Button>
        )}
      </>
    );
  }

  return null;
};
