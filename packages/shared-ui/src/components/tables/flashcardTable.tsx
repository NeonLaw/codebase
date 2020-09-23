import React from 'react';
import { Table } from './base';
import { useAllFlashcardsQuery } from '../../utils/api';

interface FlashcardTableProps {
  onRowClick(row: any): void;
}

export const FlashcardTable = (props: FlashcardTableProps) => {
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
      Header: 'Prompt',
      accessor: 'prompt',
    },
    {
      Header: 'Topic',
      accessor: 'topic',
    },
    {
      Header: 'Answer',
      accessor: 'answer',
    },
  ];
  const nodes = data?.allFlashcards?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-flashcards-table"
      onRowClick={props.onRowClick}
    />
  );
};
