import React from 'react';
import { Table } from './base';
import { useAllMatterDocumentTemplatesQuery } from '../../utils/api';

interface MatterDocumentTemplateTableProps {
  onRowClick(row: any): void;
}

export const MatterDocumentTemplateTable = (
  props: MatterDocumentTemplateTableProps
) => {
  const { loading, data, error } = useAllMatterDocumentTemplatesQuery();

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
  ];
  const nodes = data?.allMatterDocumentTemplates?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-document-template-table"
      onRowClick={props.onRowClick}
    />
  );
};
