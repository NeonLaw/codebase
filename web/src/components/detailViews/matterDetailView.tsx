import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useMatterByIdQuery } from '../../utils/api';

export const MatterDetailView = ({ id }) => {
  const { data, loading } = useMatterByIdQuery({ variables: { id }});

  if (loading)  {
    return <Skeleton height="20px" />;
  }

  if (data) {
    return (
      <h1>Matter &nbsp;{JSON.stringify(data)}</h1>
    );
  }

  return null;
};
