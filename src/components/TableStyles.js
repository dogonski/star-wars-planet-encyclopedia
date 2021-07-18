import styled from 'styled-components';
import theme from '../theme/theme';

const TableStyles = styled.div`
  display: block;
  position: relative;
  width: 90%;
  justify-self: center;
  align-self: center;
  margin: 0 auto;
  background-color: ${theme.color.white};
  font-weight: ${theme.fontWeight.light};
  padding: 25px;
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.05);

  table {
    width: 100%;
    background-color: white;
    margin-top: 0;
    border-collapse: collapse;
    font-size: 1.4rem;
    overflow-wrap: normal;
  }

  th,
  td {
    font-weight: ${theme.fontWeight.light};
    color: ${theme.color.text};
    text-align: right;
    &:first-child {
      text-align: left;
      color: ${theme.color.main};
    }
  }
  th {
    padding: 15px 0;
    margin-right: 10px;
    border-bottom: 1px solid ${theme.color.border};
  }
  td {
    padding: 10px 0;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    padding: 0;

    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tbody tr {
      padding: 10px 0 15px;
      &:nth-child(even) {
        background: ${theme.color.even};
      }
    }
    td {
      border: none;
      position: relative;
      padding-left: 50%;
      text-align: left;
      vertical-align: center;
    }

    td:before {
      position: absolute;
      top: 10px;
      left: 15px;
      width: 45%;
      padding-right: 10px;
    }

    td:nth-of-type(1):before {
      content: 'Planet Name';
      color: ${theme.color.text};
    }
    td:nth-of-type(2):before {
      content: 'Rotation period';
    }
    td:nth-of-type(3):before {
      content: 'Orbital period';
    }
    td:nth-of-type(4):before {
      content: 'Diameter';
    }
    td:nth-of-type(5):before {
      content: 'Cilmate';
    }
    td:nth-of-type(6):before {
      content: 'Surface watre';
    }
    td:nth-of-type(7):before {
      content: 'Population';
    }
  }
`;

export default TableStyles;
