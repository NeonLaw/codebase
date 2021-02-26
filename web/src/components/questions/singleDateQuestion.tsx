import { Heading, useColorMode } from '@chakra-ui/react';
import React, { useState } from 'react';

import { Button } from '../button';
import DatePicker from 'react-datepicker';
import { Section } from '../section';
import { gutters } from '../../styles/neonLaw';
import { navigate } from 'react-intl';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

interface SingleDateInterface {
  prompt: string;
  id: string;
  decisionTree: any;
  questionnairePath: string;
  updateAnswers: any;
}

const StyledDateInput = styled.button`
  border: 1px solid;
  padding: .3rem ${gutters.xSmallOne};
`;

const DateInput = ({value, onClick}) => {
  const {colorMode} = useColorMode();

  return (
    <StyledDateInput
      onClick={onClick}
      style={{
        borderColor: colorMode === 'light' ? '#bbb' : '#999'
      }}
    >
      {value}
    </StyledDateInput>
  );
};

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
    <Section>
      <Heading as="h3" fontWeight="normal">
        {prompt}
      </Heading>
      <DatePicker
        calendarClassName="calendar"
        selected={chosenDate}
        onChange={(date) => setChosenDate(date)}
        // eslint-disable-next-line
        // @ts-ignore
        customInput={<DateInput />}
      />
      <br />
      <Button
        flash={true}
        buttonScheme="teal"
        containerStyles={{margin: `${gutters.xSmallOne} 0`}}
        onClick={() => {
          updateAnswers(id, chosenDate);

          navigate(nextStepPath());
        }}
      >
        {intl.formatMessage({ id: 'components_questions.submit' })}
      </Button>
    </Section>
  );
};
