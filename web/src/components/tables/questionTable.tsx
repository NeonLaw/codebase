import { Table } from './base';

interface QuestionTableProps {
  onRowClick(row: any): void;
  loading: boolean;
  data: any;
  error: any;
}

export const QuestionTable = ({
  data,
  error,
  loading,
  onRowClick,
}: QuestionTableProps) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
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
    {
      Header: 'Question Type',
      accessor: 'questionType',
    },
  ];
  const nodes = data?.questions?.nodes || [];

  return (
    <Table
      columns={columns}
      data={nodes}
      testId="admin-questions-table"
      onRowClick={onRowClick}
      defaultPageSize={50}
    />
  );
};
