import React from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';
import styled from 'styled-components';
import { data as tableData } from '../assets/data.json';
import SortingIndicator from './SortingIndicator';
import Styles from './TableStyles';

const SortSign = styled.div`
  display: inline-block;
  padding: 0 3px;
`;
const Asc = styled(SortingIndicator)`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
`;
const Desc = styled(SortingIndicator)`
  clip-path: polygon(0 0, 50% 100%, 100% 0);
`;

const Table = ({ id }) => {
  const results = [];
  tableData.planets.forEach((planet) => {
    if (planet.filmConnection.films.find((film) => film.id === id) !== undefined) {
      const planetEdited = { ...planet };
      planetEdited.climates = planet.climates.join(', ');
      results.push(planetEdited);
    }
  });
  const data = React.useMemo(() => results, []);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Planet Name',
        accessor: 'name',
      },
      {
        Header: 'Rotation period',
        accessor: 'rotationPeriod',
      },
      {
        Header: 'Orbital period',
        accessor: 'orbitalPeriod',
      },
      {
        Header: 'Diameter',
        accessor: 'diameter',
      },
      {
        Header: 'Climate',
        accessor: 'climates',
      },
      {
        Header: 'Surface water',
        accessor: 'surfaceWater',
      },
      {
        Header: 'Population',
        accessor: 'population',
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      disableSortRemove: true,
    },
    useSortBy,
  );
  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th key={column.accessor} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {column.isSortedDesc && (
                    <SortSign>
                      <Asc />
                      <Desc active />
                    </SortSign>
                  )}
                  {!column.isSortedDesc && column.isSorted && (
                    <SortSign>
                      <Asc active />
                      <Desc />
                    </SortSign>
                  )}
                  {!column.isSorted && (
                    <SortSign>
                      <Asc />
                      <Desc />
                    </SortSign>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) =>
                  cell.value === null ? (
                    <td key={cell.id}>unknown</td>
                  ) : (
                    <td key={cell.id} {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};
Table.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Table;
