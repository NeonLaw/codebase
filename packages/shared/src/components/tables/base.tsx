import { Flex, Icon, Text } from '@chakra-ui/core';
import {
  StyledTable,
  TableCell,
  TableHead,
  TableIconButton,
  TableRow
} from './styles';
import { usePagination, useSortBy, useTable } from 'react-table';
import { Card } from '../cards/base';
import { CardFooter } from '../cards/cardFooter';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

interface TableInterface {
  columns: any;
  data: any;
  tableHeading?: string;
  pageSize?: string;
  onRowClick?(): void;
}

export const Table = ({
  columns,
  data,
  pageSize: initialPageSize,
  onRowClick
}: TableInterface) => {
  const tableColumns = React.useMemo(() => columns, [columns]);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 40em)' });

  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns: tableColumns,
      data,
      initialState: { pageIndex: 0, pageSize: initialPageSize }
    },
    useSortBy,
    usePagination
  );

  return (
    <Card flexDirection="column" flex={1} maxWidth="100%" width="100%">
      <StyledTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <Flex
              key={headerGroup.id}
              flex={1}
              flexDirection="row"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <TableCell
                  p={4}
                  key={column.id}
                  bg="gray.100"
                  {...column.getHeaderProps()}
                  justifyContent="space-between"
                  {...column.getSortByToggleProps()}
                >
                  <Text fontWeight="bold">{column.render('Header')}</Text>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <Icon name="chevron-up" size={20} />
                    ) : (
                        <Icon name="chevron-down" size={20} />
                      )
                  ) : (
                      ''
                    )}
                </TableCell>
              ))}
            </Flex>
          ))}
        </TableHead>
        <Flex flexDirection="column">
          {page.map(
            (row, key) =>
              prepareRow(row) || (
                <TableRow
                  onClick={() => onRowClick && onRowClick(row)}
                  key={key}
                  flexDirection="row"
                  {...row.getRowProps()}
                  data-testid="table-row"
                >
                  {row.cells.map((cell) => {
                    return (
                      <TableCell
                        key={cell.row.index}
                        justifyContent="flex-start"
                        p={4}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </TableCell>
                    );
                  })}
                </TableRow>
              )
          )}
        </Flex>
      </StyledTable>
      <CardFooter justifyContent="space-between" flexDirection="row">
        <Flex flexDirection="row">
          <TableIconButton
            mr={2}
            onClick={() => gotoPage(0)}
            isDisabled={!canPreviousPage}
            icon={() => <Icon name="chevron-left" />}
          />
          <TableIconButton
            mr={2}
            isDisabled={!canPreviousPage}
            onClick={() => previousPage()}
            icon={() => <Icon name="chevron-left" />}
          />
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Text mr={4}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </Text>
          {!isTabletOrMobile && (
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          )}
        </Flex>
        <Flex flexDirection="row">
          <TableIconButton
            ml={2}
            isDisabled={!canNextPage}
            onClick={() => nextPage()}
            icon={() => <Icon name="chevron-right" />}
          />
          <TableIconButton
            ml={2}
            onClick={() => gotoPage(pageCount ? pageCount - 1 : 1)}
            isDisabled={!canNextPage}
            icon={() => <Icon name="chevron-right" />}
          />
        </Flex>
      </CardFooter>
    </Card>
  );
};
