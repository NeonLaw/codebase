import { useSortBy, useTable } from 'react-table';
import { Box } from '@chakra-ui/core';
import React from 'react';

export const Table = ({ data, columns }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <table
      {...getTableProps()}
      style={{ minWidth: '100%' }}
    >
      <Box as="thead">
        {headerGroups.map((headerGroup, i) => (
          <tr key={i} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, j) => (
              <Box as="th"
                key={j}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </Box>
            ))}
          </tr>
        ))}
      </Box>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr key={i} {...row.getRowProps()}>
              {row.cells.map((cell, j) => {
                return (
                  <Box
                    as="th"
                    fontWeight="normal"
                    border="1px"
                    key={j}
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </Box>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
