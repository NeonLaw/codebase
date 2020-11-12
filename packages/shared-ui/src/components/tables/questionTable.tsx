import React from 'react';
import { Table } from './base';
import { useAllQuestionsQuery } from '../../utils/api';

interface QuestionTableProps {
  onRowClick(row: any): void;
}

export const QuestionTable = (props: QuestionTableProps) => {
  const { loading, data, error } = useAllQuestionsQuery();

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
      Header: 'Question Type',
      accessor: 'questionType',
    },
  ];
  const nodes = data?.allQuestions?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-questions-table"
      onRowClick={props.onRowClick}
    />
  );
};
