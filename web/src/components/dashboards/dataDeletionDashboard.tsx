import {
  DataDeletionDetailView
} from '../detailViews/dataDeletionMatterDetailView';
import React from 'react';
import { Skeleton } from '@chakra-ui/react';
import { useAllCurrentUserMattersQuery } from '../../utils/api';

export const DataDeletionDashborard = () => {
  const { data, loading } = useAllCurrentUserMattersQuery();

  if (loading) {
    return <Skeleton height="20px" />;
  }

  if (data) {
    const matters = data?.currentUserMatters?.nodes || [];

    return (
      <>
        {matters.map((matter, key) => {
          if (matter.matterTemplateCategory === 'data-deletion') {
            return <DataDeletionDetailView key={key} id={matter.id} />;
          }
          return null;
        })}
      </>
    );
  }

  return null;
};
