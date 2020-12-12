import React from 'react';
import { Table } from './base';
import { useAllPeopleQuery } from '../../utils/api';

export const PeopleTable = () => {
  const { loading, data, error } = useAllPeopleQuery();

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
      Header: 'Email',
      accessor: 'email',
    },
  ];
  const nodes = data?.allPeople?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="people-table"
    />
  );
};
