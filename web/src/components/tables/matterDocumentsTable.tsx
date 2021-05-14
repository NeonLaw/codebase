import { Table } from './base';

export const MatterDocumentsTable = ({ matterDocuments }) => {
  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Filename',
      accessor: 'document.filename'
    },
    {
      Header: 'Created',
      accessor: (row) => {
        const date = new Date(row.document.createdAt);
        return date.toISOString().split('T')[0];
      },
    },
    {
      Header: 'Template',
      accessor: 'document.documentTemplate.abbreviation',
    },
    {
      Header: 'Download Url',
      accessor: 'document.downloadUrl',
    },
  ];

  return (
    <Table
      columns={columns}
      data={matterDocuments}
      testId="matters-table"
      onRowClick={(row) => { window.open(row.values['document.downloadUrl']); }}
      defaultPageSize={50}
    />
  );
};
