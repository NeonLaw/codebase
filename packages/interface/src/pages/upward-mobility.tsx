import { Heading, Text } from '@chakra-ui/core';

import { FlashButton } from '@neonlaw/shared-ui/src/components/button';
import { PublicLayout } from '@neonlaw/shared-ui/src/layouts/publicLayout';
import React from 'react';
import { Router } from '@reach/router';
import { Section } from '@neonlaw/shared-ui/src/components/section';
import { Seo } from '../components/seo';
import {
  UpwardMobilityQuestionnaire
} from '@neonlaw/shared-ui/src/components/upwardMobilityQuestionnaire';
import { navigate } from 'gatsby-plugin-intl';
import { useIntl } from 'gatsby-plugin-intl';

/* eslint-disable @typescript-eslint/no-unused-vars */
const UpwardMobilityHome = (props) => {
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const intl = useIntl();
  return (
    <>
      <Seo title="Upward Mobility" />
      <Section>
        <Heading as="h2" fontWeight="normal" marginTop="4.5rem">
          {intl.formatMessage({ id: 'pages_upward_mobility.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages_upward_mobility.text' })}
        </Text>
        <FlashButton
          buttonScheme="teal"
          onClick={() => {
            navigate('/upward-mobility/begin');
          }}
        >
          {intl.formatMessage({ id: 'pages_upward_mobility.button_takeQ' })}
        </FlashButton>
      </Section>
    </>
  );
};

const UpwardMobilityRouter = () => {
  return (
    <PublicLayout>
      <Router basepath="/upward-mobility">
        <UpwardMobilityQuestionnaire path=":questionId" />
        <UpwardMobilityHome path="/" />
      </Router>
    </PublicLayout>
  );
};

/* eslint-disable-next-line import/no-default-export */
export default UpwardMobilityRouter;
