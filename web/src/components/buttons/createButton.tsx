import { Button } from '../button';
import React from 'react';
import { SubmissionInProgress } from '../submissionInProgress';
import { SubmitForm } from '../keybindings/submitForm';
import { gutters } from '../../styles/neonLaw';

interface CreateButtonProps {
  dasherizedResourceName: string;
  titlecaseResourceName: string;
  isSubmitting: boolean;
  createMutationLoading: boolean;
}

export const CreateButton = ({
  dasherizedResourceName,
  titlecaseResourceName,
  isSubmitting,
  createMutationLoading,
}: CreateButtonProps) => {
  return (
    <Button
      flash={false}
      type="submit"
      data-testid={`create-${dasherizedResourceName}-form-submit`}
      disabled={isSubmitting || createMutationLoading}
      containerStyles={{
        margin: `${gutters.xSmallOne} 0`,
      }}
      isFullWidth={true}
      colorScheme="cyan"
    >
      Create {titlecaseResourceName}&nbsp;
      <SubmitForm />
      <SubmissionInProgress loading={createMutationLoading} />
    </Button>
  );
};
