import React from 'react';
import { Table } from './base';

interface DocumentTemplateTableProps {
  onRowClick(row: any): void;
  loading: boolean;
  data: any;
  error: any;
}

export const DocumentTemplateTable = (
  {
    data,
    error,
    loading,
    onRowClick,
  }: DocumentTemplateTableProps
) => {

  if (loading) {
    return (<p>Loading</p>);
  }
  if (error) {
    return (<p>{error}</p>);
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
  const nodes = data?.documentTemplates?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-document-template-table"
      onRowClick={onRowClick}
    />
  );
};
