import { Box, Heading, Text } from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';

import {
  MatterTemplateQuestionnairesList
} from '../../components/lists/matterTemplateQuestionnairesList';
import { PublicLayout } from '../../layouts/publicLayout';
import { useIntl } from 'react-intl';

const BarPrepQuestions = () => {
  const intl = useIntl();

  return (
    <PublicLayout>
      <Box height="6em" />
      <Box maxWidth={sizes.textContainerXSmall}>
        <Heading fontWeight="normal" marginBottom={gutters.xSmallOne}>
          {intl.formatMessage({ id: 'pages.bar_prep.heading' })}
        </Heading>
        <Text>
          {intl.formatMessage({ id: 'pages.bar_prep.text' })}
        </Text>
      </Box>

      <MatterTemplateQuestionnairesList
        basePath="/questionnaires"
        category="bar-prep"
      />
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default BarPrepQuestions;
