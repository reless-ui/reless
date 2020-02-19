import * as React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const StyledTableHeader = styled.thead`
  margin-right: 10px;
  font-size: 14px;
  border: 1px solid red;
`;

const StyledTableHeaderTh = styled.th`
  background-color: ${colors.background};
  border-bottom: 1px solid ${colors.borderLight};
  text-align: left;
  padding: 5px 0;
`;

const StyledTableBody = styled.tbody`
  font-size: 14px;
  border: 1px solid red;
`;

const StyledTableContentTd = styled.td`
  font-size: 14px;
  border-bottom: 1px solid ${colors.borderLight};
`;

interface TableProps {
  dataSource: any[];
  columns: any[];
}

interface TableState {}

class Table extends React.Component<TableProps, TableState> {
  public static defaultProps = {
    size: "md",
    spin: false,
    rotate: 0
  };

  render() {
    const { dataSource, columns } = this.props;
    // console.log("table: ", columns, dataSource);
    return (
      <StyledTable>
        <StyledTableHeader>
          <tr>
            {columns.map(column => (
              <StyledTableHeaderTh key={column.index}>
                {column.title}
              </StyledTableHeaderTh>
            ))}
          </tr>
        </StyledTableHeader>
        <StyledTableBody>
          {dataSource.map(dataRow => (
            <tr key={dataRow.key}>
              {columns.map(column => (
                <StyledTableContentTd key={column.index}>
                  {dataRow[column.index]}
                </StyledTableContentTd>
              ))}
            </tr>
          ))}
        </StyledTableBody>
      </StyledTable>
    );
  }
}

export default Table;
