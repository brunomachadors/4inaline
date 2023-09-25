import styled from 'styled-components';

export const BoardUi = styled.div`
  display: flex;
  justify-content: center;
`;

export const RowUi = styled.div`
  display: flex;
  background-color: blue;
  justify-content: center;
  width: 350px;
  border-left: solid black;
  border-right: solid black;
`;

export const ColumnUi = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: white;
  border-radius: 2cm;
  box-shadow: 3px 2px 2px black;
`;
