import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 16px;
  /* border: 1px solid black; */
  box-shadow: 1px 1px 2px black;
  /* border-collapse: collapse; */
`;

export const StyledTh = styled.th`
  background-color: #00bcd5;
  color: white;
  font-weight: bold;
  padding: 8px;
  text-shadow: 0px 0px 1px black;
`;

export const StyledTd = styled.td`
  padding: 8px;
  text-align: center;
`;

export const StyledTbody = styled.tbody`
  color: #2c2d2fe0;
  text-shadow: 0px 0px 0, 1px black;

  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
`;

export const StyledTr = styled.tr`
  text-shadow: 0px 0px 0, 1px black;
`;

export const StyledThead = styled.thead`
  /* color: #ff0000; */
`;
