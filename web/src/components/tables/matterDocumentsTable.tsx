import { Table } from './base';

export const MatterDocumentsTable = ({ matterDocuments }) => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Document',
      accessor: 'document.filename',
    },
    {
      Header: 'Created',
      accessor: 'document.createdAt',
    },
    {
      Header: 'Template',
      accessor: 'document.documentTemplate.abbreviation',
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
