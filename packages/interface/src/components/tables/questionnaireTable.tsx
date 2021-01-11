import React from 'react';
import { Table } from './base';
import { useAllQuestionnairesQuery } from '../../utils/api';

interface QuestionnaireTableProps {
  onRowClick(row: any): void;
}

export const QuestionnaireTable = (props: QuestionnaireTableProps) => {
  const { loading, data, error } = useAllQuestionnairesQuery();

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
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Matter Template',
      accessor: 'matterTemplateByMatterTemplateId.name',
    },
  ];
  const nodes = data?.allQuestionnaires?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-questionnaires-table"
      onRowClick={props.onRowClick}
    />
  );
};
