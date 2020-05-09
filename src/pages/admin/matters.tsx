import { Heading, Text } from '@chakra-ui/core';
import { AdminLayout } from '@layouts/admin';
import React from 'react';
import { Table } from '@components/table';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_MATTERS = gql`
  {
    allMatters {
      nodes {
        id
        clioResponse
      }
    }
  }
`;

const AdminMatters = () => {
  const { loading, error, data } = useQuery(ALL_MATTERS);
  if (loading) return (<>Loading...</>);

  if (error) {
    return (<Text>{JSON.stringify(error)}</Text>);
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Clio Response',
      accessor: 'clioResponse',
    },
  ];

  return (
    <AdminLayout>
      <Heading textAlign="center" marginBottom="20px">
        Matters
      </Heading>
      <Table columns={columns} data={data.allMatters.nodes} />
    </AdminLayout>
  );
};

export default AdminMatters;
