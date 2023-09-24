import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

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

export const ButtonUi = styled.button`
  margin: 4.5px;
  padding: 0px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 0.3cm;
  box-shadow: 5px 2px 2px black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonImageUi = styled.img`
  width: 25px;
  height: 25px;
`;

export const PlayerColor = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Player1ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: red;
`;

export const Player2ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: green;
`;

export const WinnerTitle = styled.h2`
  text-align: center;
`;

export const PlayAgainButton = styled.button`
  display: flex;
  align-items: center;
  margin: 10px auto;
  height: 30px;
`;
