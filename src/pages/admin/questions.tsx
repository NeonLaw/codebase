import { Heading, Text } from '@chakra-ui/core';
import { AdminLayout } from '@layouts/admin';
import React from 'react';
import { Table } from '@components/table';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_QUESTIONS = gql`
  {
    allQuestions {
      nodes {
        id
        prompt
      }
    }
  }
`;

const AdminQuestions = () => {
  const { loading, error, data } = useQuery(ALL_QUESTIONS);
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
      Header: 'Prompt',
      accessor: 'prompt',
    },
  ];

  return (
    <AdminLayout>
      <Heading textAlign="center" marginBottom="20px">
        Questions
      </Heading>
      <Table columns={columns} data={data.allQuestions.nodes} />
    </AdminLayout>
  );
};

export default AdminQuestions;
