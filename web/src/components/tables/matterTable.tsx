import React from 'react';
import { Table } from './base';
import { useAllMattersQuery } from '../../utils/api';
import { useRouter } from 'next/router';

export const MatterTable = () => {
  const router = useRouter();
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
      accessor: 'primaryContact.name',
    },
  ];
  const nodes = data?.matters?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="matters-table"
      onRowClick={(row) => {
        router.push(`/portal/admin/matters/${row.values.id}`);
        return null;
      }}
    />
  );
};
