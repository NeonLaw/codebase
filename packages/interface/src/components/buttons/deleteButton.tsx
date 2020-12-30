import { Button } from '../button';
import { Kbd } from '@chakra-ui/core';
import React from 'react';
import { SubmissionInProgress } from '../submissionInProgress';
import { gutters } from '../../themes/neonLaw';

interface DeleteButtonProps {
  dasherizedResourceName: string;
  titlecaseResourceName: string;
  isSubmitting: boolean;
  updateMutationLoading: boolean;
  deleteMutationLoading: boolean;
  deleteHandler(): void;
}

export const DeleteButton = ({
  dasherizedResourceName,
  titlecaseResourceName,
  isSubmitting,
  updateMutationLoading,
  deleteMutationLoading,
  deleteHandler,
}: DeleteButtonProps) => {

  return (
    <Button
      flash={true}
      data-testid={`delete-${dasherizedResourceName}-button`}
      isDisabled={
        isSubmitting || updateMutationLoading || deleteMutationLoading
      }
      containerStyles={{
        margin: `${gutters.xSmallOne} 0`,
        width: '100%',
      }}
      styles={{ width: '100%' }}
      colorScheme="red"
      onClick={deleteHandler}
    >
      Delete {titlecaseResourceName}&nbsp;
      <Kbd border="1px solid #bbb" color="black">
        D
      </Kbd>
      <SubmissionInProgress
        loading={updateMutationLoading || deleteMutationLoading}
      />
    </Button>
  );
};
