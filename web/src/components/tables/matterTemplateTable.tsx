import React from 'react';
import { Table } from './base';
import { useAllMatterTemplatesQuery } from '../../utils/api';

interface MatterTemplateTableProps {
  onRowClick(row: any): void;
}

export const MatterTemplateTable = (props: MatterTemplateTableProps) => {
  const { loading, data, error } = useAllMatterTemplatesQuery();

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
      Header: 'Javascript Module',
      accessor: 'javascriptModule',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
  ];
  const nodes = data?.matterTemplates?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="matter-template-table"
      onRowClick={props.onRowClick}
    />
  );
};
