import React from 'react';
import { Table } from './base';
import { useAllFlashcardsQuery } from '../../utils/api';

export const FlashcardTable = () => {
  const { loading, data, error } = useAllFlashcardsQuery();

  if (loading) {
    return (<h1>Loading</h1>);
  }
  if (error) {
    return (<h1>{error}</h1>);
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Topic',
      accessor: 'topic',
    },
    {
      Header: 'Prompt',
      accessor: 'prompt',
    },
  ];
  const nodes = data?.allFlashcards?.nodes || [];

  return (
    <Table
      rowModal={{ yes: 'true' }}
      columns={columns}
      data={nodes}
      testId="admin-flashcards-table"
    />
  );
};
