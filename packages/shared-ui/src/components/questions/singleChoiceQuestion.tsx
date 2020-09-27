import { Heading, Radio, RadioGroup } from '@chakra-ui/core';
import React, { useState } from 'react';

import { FlashButton } from '../../components/button';
import { Section } from '../section';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

interface SingleChoiceQuestionInterface {
  prompt: string;
  choices: string[];
  id: string;
  decisionTree: any;
  questionnairePath: string;
  updateAnswers: any;
}

export const SingleChoiceQuestion = ({
  prompt,
  choices,
  id,
  decisionTree,
  questionnairePath,
  updateAnswers,
}: SingleChoiceQuestionInterface) => {
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

  const intl = useIntl();

  return (
    <>
      <Section>
        <Heading as="h3" fontWeight="normal">
          {prompt}
        </Heading>
        <RadioGroup 
          onChange={
            (e: any) => 
              setValue((e.target as HTMLInputElement).value)}
          value={value}
        >
          {choices.map((choice, i) => (
            <Radio width="100%" value={i.toString()} key={i}>
              {choice}
            </Radio>
          ))}
        </RadioGroup>
        <FlashButton
          margin="1em 0"
          action={() => {
            const chosenChoice = choices[value];

            updateAnswers(id, chosenChoice);

            navigate(nextStepPath(chosenChoice));
          }}
        >
          {intl.formatMessage({ id: 'components_questions.submit' })}
        </FlashButton>
      </Section>
    </>
  );
};
