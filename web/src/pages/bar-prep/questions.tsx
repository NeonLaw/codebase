import { Box, Heading, Text } from '@chakra-ui/react';
import { gutters, sizes } from '../../styles/neonLaw';
import { Container } from '../../components/container';
import {
  MatterTemplateQuestionnairesList
} from '../../components/lists/matterTemplateQuestionnairesList';
import { PublicLayout } from '../../components/layouts/publicLayout';
import { useIntl } from 'react-intl';

const BarPrepQuestions = () => {
  const intl = useIntl();

  return (
    <PublicLayout>
      <Container>
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
      </Container>
    </PublicLayout>
  );
};

/* eslint-disable-next-line */
export default BarPrepQuestions;
