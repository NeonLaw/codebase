import { Heading, useColorMode } from '@chakra-ui/core';
import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import { FlashButton } from '../button';
import { Section } from '../section';
import { gutters } from '../../themes/neonLaw';
import { navigate } from 'gatsby-plugin-intl';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

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
  );
};
