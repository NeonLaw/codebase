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
import { gutters } from '@neonlaw/shared-ui/src/themes/neonLaw';
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
        <Text margin="2em 0">
          {intl.formatMessage({ id: 'pages_upward_mobility.text' })}
        </Text>
        <FlashButton
          action={() => {
            navigate('/upward-mobility/begin');
          }}
          margin={`${gutters.xSmallOne} 0`}
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

export default UpwardMobilityRouter;
