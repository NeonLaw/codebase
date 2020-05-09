import { Heading, Text } from '@chakra-ui/core';
import { AdminLayout } from '@layouts/admin';
import React from 'react';
import { Table } from '@components/table';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_QUEUE_JOBS = gql`
  {
    allQueueJobs {
      nodes {
        id
        status
        message
        referrerId
        referrerTable
        context
      }
    }
  }
`;

const AdminQueueJobs = () => {
  const { loading, error, data } = useQuery(ALL_QUEUE_JOBS);
  if (loading) return (<>Loading...</>);

  if (error) {
    return (<Text>{error}</Text>);
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Message',
      accessor: 'message',
    },
    {
      Header: 'Referrer Id',
      accessor: 'referrerId',
    },
    {
      Header: 'Referrer Table',
      accessor: 'referrerTable',
    },
    {
      Header: 'Context',
      accessor: 'context',
    },
  ];

  return (
    <AdminLayout>
      <Heading textAlign="center" marginBottom="20px">
        Queue Jobs
      </Heading>
      <Table columns={columns} data={data.allQueueJobs.nodes} />
    </AdminLayout>
  );
};

export default AdminQueueJobs;
