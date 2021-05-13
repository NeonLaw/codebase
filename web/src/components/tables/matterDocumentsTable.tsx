import { Table } from './base';

export const MatterDocumentsTable = ({ matterDocuments }) => {
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

  return (
    <Table
      columns={columns}
      data={matterDocuments}
      testId="matters-table"
      onRowClick={() => { return; }}
    />
  );
};
