import { Box } from '@chakra-ui/react';
import { Link } from 'gatsby-plugin-intl';
import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useAllActiveMatterTemplatesByCategoryQuery } from '../../utils/api';

export const MatterTemplateQuestionnairesList = ({ basePath, category }) => {
  const { data, loading } = useAllActiveMatterTemplatesByCategoryQuery(
    { variables: { category }}
  );

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const matterTemplates = data?.allMatterTemplates?.nodes || [];
    const questionnaires = matterTemplates.flatMap((matterTemplate) => {
      return matterTemplate.questionnairesByMatterTemplateId.nodes;
    });

    return (
      <Box as="ul">
        {questionnaires.map((questionnaire, key) => {
          return (
            <Box as="li" key={key}>
              <Box
                as={Link}
                textDecoration="underline"
                to={`${basePath}/${questionnaire.id}`}
              >
                {questionnaire.name}
              </Box>
            </Box>
          );
        })}
      </Box>
    );
  }

  return null;
};
