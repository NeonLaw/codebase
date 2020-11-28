import React from 'react';
import { Table } from './base';
import { useAllMattersQuery } from '../../utils/api';

interface MatterTableProps {
  onRowClick(row: any): void;
}

export const MatterTable = (props: MatterTableProps) => {
  const { loading, data, error } = useAllMattersQuery();

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
      Header: 'Primary Contact',
      accessor: 'personByPrimaryContactId.name',
    },
  ];
  const nodes = data?.allMatters?.nodes || [];

  return (
    <Table
      columns={columns}

      data={nodes}
      testId="matters-table"
      onRowClick={props.onRowClick}
    />
  );
};
