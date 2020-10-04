import { Box, Heading } from '@chakra-ui/core';
import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { FlashButton } from '../button';
import { Section } from '../section';
import { gutters } from '../../themes/neonLaw';
import { navigate } from 'gatsby-plugin-intl';
import { useIntl } from 'gatsby-plugin-intl';

interface SingleDateInterface {
  prompt: string;
  id: string;
  decisionTree: any;
  questionnairePath: string;
  updateAnswers: any;
}

export const SingleDateQuestion = ({
  id,
  prompt,
  decisionTree,
  questionnairePath,
  updateAnswers,
}: SingleDateInterface) => {
  const nextStepPath = () => {
    const nextStep = decisionTree[id]['*'];

    if (nextStep) {
      return `${questionnairePath}/${nextStep}`;
    }
    return `${questionnairePath}/end`;
  };

  const currentTime = new Date();

  const [chosenDate, setChosenDate] = useState(currentTime);

  const intl = useIntl();

  return (
    <Box>
      <Section>
        <Heading as="h3" fontWeight="normal">
          {prompt}
        </Heading>
        <DatePicker
          selected={chosenDate}
          onChange={(date) => setChosenDate(date)}
        />
        <br />
        <FlashButton
          buttonScheme="teal"
          containerStyles={{margin: `${gutters.xSmallOne} 0`}}
          onClick={() => {
            updateAnswers(id, chosenDate);

            navigate(nextStepPath());
          }}
        >
          {intl.formatMessage({ id: 'components_questions.submit' })}
        </FlashButton>
      </Section>
    </Box>
  );
};
