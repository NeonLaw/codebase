import React, { useRef, useState } from 'react';
import { Text, useColorMode } from '@chakra-ui/core';
import { Button } from '../button';
import ReactDiffViewer from 'react-diff-viewer';
import { Skeleton } from '@chakra-ui/core';
import { Textarea } from '../inputs';
import { convertSlateToPlaintext } from '../../utils/slate';
import { gutters } from '../../themes/neonLaw';
import { useForm } from 'react-hook-form';
import { useQuestionByIdQuery } from '../../utils/api';

export const QuestionDetailView = ({ id }) => {
  const [showAnswer, toggleShowAnswer] = useState(false);
  const [userAnswer, changeUserAnswer] = useState(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { control, handleSubmit, errors } = useForm();
  const { data, loading } = useQuestionByIdQuery(
    { variables: { id }}
  );
  const { colorMode } = useColorMode();

  const onSubmit = async ({ answer }) => {
    changeUserAnswer(answer);
    toggleShowAnswer(true);
  };

  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const answer = convertSlateToPlaintext(data.questionById?.helpText);
    const prompt  = data.questionById?.prompt;

    return !showAnswer ? (
      <form
        onSubmit={handleSubmit(onSubmit as any)}
        ref={formRef}
      >
        <Text fontSize="1.2em" marginBottom="1em">
          {prompt}
        </Text>
        <Textarea
          testId="flashcard-textarea"
          control={control}
          label={null}
          name="answer"
          placeholder="Type in the answer"
          defaultValue={userAnswer}
          errors={errors}
        />
        <Button
          data-testid="flashcard-form-submit"
          flash={false}
          type="submit"
          containerStyles={{marginTop: gutters.xSmallOne}}
        >
            Show Answer
        </Button>
      </form>
    ) : (
      <>
        <Text fontSize="1.2em" marginBottom="1em">
          {prompt}
        </Text>
        {answer === userAnswer ? (
          <Text>You got it!</Text>
        ) : (
          <ReactDiffViewer
            oldValue={answer}
            newValue={convertSlateToPlaintext(userAnswer) || ''}
            hideLineNumbers={true}
            showDiffOnly={false}
            splitView={false}
            useDarkTheme={colorMode === 'dark'}
          />
        )}
        <Button
          flash={false}
          containerStyles={{marginTop: gutters.xSmallOne}}
          className="show-prompt"
          onClick={() => { toggleShowAnswer(false); }}
        >
            Try Typing the Answer
        </Button>
      </>
    );
  }

  return null;
};
