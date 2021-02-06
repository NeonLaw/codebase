import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from '@chakra-ui/icons';
import {
  StyledTable,
  TableCell,
  TableHead,
  TableIconButton,
  TableRow,
} from './styles';
import { usePagination, useSortBy, useTable } from 'react-table';

import { Card } from '../cards/base';
import { CardFooter } from '../cards/cardFooter';
import React from 'react';
import { colors } from '../../themes/neonLaw';
import { useMediaQuery } from 'react-responsive';

interface TableInterface {
  columns: any;
  data: any;
  testId: string;
  defaultPageSize?: number;
  onRowClick?(row: any): any;
}

export const Table = ({
  columns,
  data,
  testId,
  defaultPageSize = 5,
  onRowClick = () => {
    return;
  },
}: TableInterface) => {
  const tableColumns = React.useMemo(() => columns, [columns]);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 40em)' });

  const { colorMode } = useColorMode();

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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: tableColumns,
      data,
      initialState: {
        hiddenColumns: ['id'],
        pageIndex: 0,
        pageSize: defaultPageSize,
      },
    },
    useSortBy,
    usePagination
  );

  return (
    <Card flexDirection="column" flex={1} maxWidth="100%" width="100%">
      <StyledTable {...getTableProps()} data-testid={testId}>
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
                  bg={colors.lighterBg[colorMode]}
                  {...column.getHeaderProps()}
                  justifyContent="space-between"
                  {...column.getSortByToggleProps()}
                >
                  <Text fontWeight="bold">{column.render('Header')}</Text>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
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
                  key={key}
                  flexDirection="row"
                  {...row.getRowProps()}
                  data-testid="table-row"
                >
                  {row.cells.map((cell) => (
                    <TableCell
                      key={cell.row.index}
                      justifyContent="flex-start"
                      p={4}
                      onClick={() => {
                        onRowClick(row);
                      }}
                      {...cell.getCellProps()}
                    >
                      {cell.column.Header === 'Answer' ? (
                        <Accordion
                          allowMultiple
                          width="100%"
                          minWidth="150px"
                          borderLeftWidth="1px"
                          borderRightWidth="1px"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <AccordionItem>
                            {({ isExpanded }) => (
                              <>
                                <AccordionButton>
                                  <Box flex="1" textAlign="left">
                                    {isExpanded ? 'Hide' : 'Show'} Answer
                                  </Box>
                                  <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel>
                                  {cell.render('Cell')}
                                </AccordionPanel>
                              </>
                            )}
                          </AccordionItem>
                        </Accordion>
                      ) : (
                        <Box>{cell.render('Cell')}</Box>
                      )}
                    </TableCell>
                  ))}
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
            icon={<ChevronLeftIcon />}
          />
          <TableIconButton
            mr={2}
            isDisabled={!canPreviousPage}
            onClick={() => previousPage()}
            icon={<ChevronLeftIcon />}
          />
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Text mr={4}>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </Text>
          {/* eslint-disable jsx-a11y/no-onchange */}
          {!isTabletOrMobile && (
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              style={{ background: colors.lighterBg[colorMode] }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          )}
          {/* eslint-enable jsx-a11y/no-onchange */}
        </Flex>
        <Flex flexDirection="row">
          <TableIconButton
            ml={2}
            isDisabled={!canNextPage}
            onClick={() => nextPage()}
            icon={<ChevronRightIcon />}
          />
          <TableIconButton
            ml={2}
            onClick={() => gotoPage(pageCount ? pageCount - 1 : 1)}
            isDisabled={!canNextPage}
            icon={<ChevronRightIcon />}
          />
        </Flex>
      </CardFooter>
    </Card>
  );
};
