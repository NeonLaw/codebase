import { Heading, Text } from '@chakra-ui/core';

import { FlashButton } from '../components/button';
import React from 'react';
import { Section } from './section';
import { decisionTree } from '../components/upwardMobilityQuestions';
import { navigate } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

export const BeginUpwardMobilityQuestionnaire = () => {
  const basePath = 'upward-mobility';
  const intl = useIntl();
  return (
    <>
      <Section>
        <Heading fontWeight="normal" marginTop="4.5rem">
          {intl.formatMessage({ id: 'beginUpwardMQ.heading' })}
        </Heading>

        <Text margin="2em 0">
          {intl.formatMessage({ id: 'beginUpwardMQ.text' })}
        </Text>

        <FlashButton
          buttonScheme="teal"
          onClick={() => {
            navigate(`/${basePath}/${decisionTree['begin']}`);
          }}
        >
          {intl.formatMessage({ id: 'beginUpwardMQ.beginButton' })}
        </FlashButton>
      </Section>
    </>
  );
};
