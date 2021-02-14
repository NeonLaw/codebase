import { Heading, Radio, RadioGroup } from '@chakra-ui/react';
import React, { useState } from 'react';

import { Button } from '../../components/button';
import { Section } from '../section';
import { gutters } from '../../themes/neonLaw';
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
          onChange={(e: any) => setValue(e)}
          value={value}
        >
          {choices.map((choice, i) => (
            <Radio width="100%" value={i.toString()} key={i}>
              {choice}
            </Radio>
          ))}
        </RadioGroup>
        <Button
          flash={true}
          buttonScheme="teal"
          containerStyles={{margin: `${gutters.xSmallOne} 0`}}
          onClick={() => {
            const chosenChoice = choices[value];

            updateAnswers(id, chosenChoice);

            navigate(nextStepPath(chosenChoice));
          }}
        >
          {intl.formatMessage({ id: 'components_questions.submit' })}
        </Button>
      </Section>
    </>
  );
};
