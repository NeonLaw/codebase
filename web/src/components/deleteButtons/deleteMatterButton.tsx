import { Button } from '../button';
import { useDeleteMatterByIdMutation, } from '../../utils/api';

export const DeleteMatterButton = ({ id }) => {
  const [
    deleteMatterMutation,
  ] = useDeleteMatterByIdMutation({
    update(cache) {
      cache.modify({
        fields: {
          allMatters(_, { DELETE }) {
            return DELETE;
          },
        },
      });
    },
  });

  const deleteMatter = async () => {
    const confirmDelete = confirm(
      'Are you sure you want to delete the matter?',
    );

    if (confirmDelete) {
      await deleteMatterMutation({ variables: { id } });
    }
  };

  return (
    <Button
      data-testid="delete-matter-button"
      onClick={async () => {
        await deleteMatter();
        console.log('/portal/admin/matters');
      }}>
      Delete Matter
    </Button>
  );
};
