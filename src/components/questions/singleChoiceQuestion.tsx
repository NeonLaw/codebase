import { Heading, Radio, RadioGroup } from '@chakra-ui/core';
import React, { useState } from 'react';
import { Button } from '@components/button';
import { navigate } from 'gatsby';

interface SingleChoiceQuestionInterface {
  prompt: string;
  choices: string[];
  id: string;
  decisionTree: any;
  questionnairePath: string;
  updateAnswers: any;
}

export const SingleChoiceQuestion = (
  {
    prompt,
    choices,
    id,
    decisionTree,
    questionnairePath,
    updateAnswers,
  }: SingleChoiceQuestionInterface
) => {
  const nextStepPath = (choice) => {
    const matchedNextStep = decisionTree[id][choice];
    const catchAll = decisionTree[id]['*'];

    const nextStep = matchedNextStep || catchAll;

    if (nextStep) {
      return `${questionnairePath}/${nextStep}`;
    }
    return `${questionnairePath}/end`;
  };

  const [value, setValue] = useState('0');

  return (
    <>
      <Heading size="md" textAlign="center" margin="1em 0">{prompt}</Heading>
      <RadioGroup onChange={e => setValue(e.target.value)} value={value}>
        {choices.map((choice, i) => (
          <Radio
            value={(i).toString()}
            key={i}
          >
            {choice}
          </Radio>
        ))}
      </RadioGroup>
      <Button
        margin="1em 0"
        onClick={() => {
          const chosenChoice = choices[value];

          updateAnswers(id, chosenChoice);

          navigate(nextStepPath(chosenChoice));
        }}
      >
        Submit
      </Button>
    </>
  );
};
