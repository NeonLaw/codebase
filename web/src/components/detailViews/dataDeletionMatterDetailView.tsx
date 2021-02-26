import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useMatterByIdQuery } from '../../utils/api';

export const DataDeletionDetailView = ({ id }) => {
  const { data, loading } = useMatterByIdQuery({ variables: { id }});

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const matter = data?.matterById;

    return (
      <h1>Matter&nbsp;{matter?.id}</h1>
    );
  }

  return null;
};
