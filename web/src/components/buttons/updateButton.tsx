import { Button } from '../button';
import React from 'react';
import { SubmissionInProgress } from '../submissionInProgress';
import { SubmitForm } from '../keybindings/submitForm';
import { gutters } from '../../styles/neonLaw';

interface UpdateButtonProps {
  dasherizedResourceName: string;
  titlecaseResourceName: string;
  isSubmitting: boolean;
  updateMutationLoading: boolean;
  deleteMutationLoading: boolean;
}

export const UpdateButton = ({
  dasherizedResourceName,
  titlecaseResourceName,
  isSubmitting,
  updateMutationLoading,
  deleteMutationLoading,
}: UpdateButtonProps) => {
  return (
    <Button
      flash={true}
      type="submit"
      data-testid={`update-${dasherizedResourceName}-form-submit`}
      isDisabled={
        isSubmitting || updateMutationLoading || deleteMutationLoading
      }
      containerStyles={{
        margin: `${gutters.xSmallOne} 0`,
        width: '100%',
      }}
      styles={{ width: '100%' }}
      colorScheme="teal"
    >
      Update {titlecaseResourceName}&nbsp;
      <SubmitForm />
      <SubmissionInProgress
        loading={updateMutationLoading || deleteMutationLoading}
      />
    </Button>
  );
};
