import React from 'react';
import { Table } from './base';
import { useAllDocumentTemplatesQuery } from '../../utils/api';

interface DocumentTemplateTableProps {
  onRowClick(row: any): void;
}

export const DocumentTemplateTable = (props: DocumentTemplateTableProps) => {
  const { loading, data, error } = useAllDocumentTemplatesQuery();

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
  const nodes = data?.allDocumentTemplates?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-document-template-table"
      onRowClick={props.onRowClick}
    />
  );
};
