import { Button } from '../button';
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
      flash={false}
      type="submit"
      data-testid={`update-${dasherizedResourceName}-form-submit`}
      disabled={
        isSubmitting || updateMutationLoading || deleteMutationLoading
      }
      containerStyles={{
        margin: `${gutters.xSmallOne} 0`,
        width: '100%',
      }}
      styles={{ width: '100%' }}
      colorScheme="cyan"
    >
      Update {titlecaseResourceName}&nbsp;
      <SubmitForm />
      <SubmissionInProgress
        loading={updateMutationLoading || deleteMutationLoading}
      />
    </Button>
  );
};
