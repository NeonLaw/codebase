import { Button, Skeleton } from '@chakra-ui/core';

import React from 'react';
import { gutters } from '../themes/neonLaw';
import { useUpdateQuestionnaireFromNeo4JMutation } from '../utils/api';

export const SyncQuestionnaireButton = ({ id }) => {
  const [
    mutation, { loading }
  ] = useUpdateQuestionnaireFromNeo4JMutation();

  if (!id) {
    return (
      <Button marginBottom={gutters.xSmall}>
      Select a Questionnaire to Sync
      </Button>
    );
  }

  if (loading) {
    return <Skeleton />;
  }

  return (
    <Button 
      marginBottom={gutters.xSmall}
      flash={false}
      buttonScheme="teal"
      onClick={async () => {
        await mutation({ variables: { id }});
      }}
    >
      Sync Questionnaire #{id}
    </Button>
  );
};
