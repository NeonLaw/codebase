import { Table } from './base';
import { useAllMattersQuery } from '../../utils/api';

export const MatterTable = ({ onRowClick }) => {
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
      Header: 'Matter Template',
      accessor: 'matterTemplate.name',
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
      onRowClick={onRowClick}
    />
  );
};
