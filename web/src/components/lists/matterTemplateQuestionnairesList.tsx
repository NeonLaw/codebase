import { Box } from '@chakra-ui/react';
import { default as Link } from 'next/link';
import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useAllActiveMatterTemplatesByCategoryQuery } from '../../utils/api';

export const MatterTemplateQuestionnairesList = ({ basePath, category }) => {
  const { data, loading, error } = useAllActiveMatterTemplatesByCategoryQuery(
    { variables: { category }}
  );

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  if (data) {
    const matterTemplates = data?.matterTemplates?.nodes || [];
    const questionnaires = matterTemplates.flatMap((matterTemplate) => {
      return matterTemplate.questionnaires.nodes;
    });

    return (
      <Box as="ul">
        {questionnaires.map((questionnaire, key) => {
          return (
            <Box as="li" key={key}>
              <Box
                as={Link}
                textDecoration="underline"
                href={`${basePath}/${questionnaire.id}`}
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
