import { Button } from '../button';
import React from 'react';
import { navigate } from 'gatsby';
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
    <Button onClick={async () => {
      await deleteMatter();
      navigate('/portal/admin/matters');
    }}>
      Delete Matter
    </Button>
  );
};
