import styled from 'styled-components';

export const PlayerColor = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
`;

export const Player1ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: red;
  border: solid black 1px;
`;

export const Player2ColorCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 10px;
  background-color: green;
  border: solid black 1px;
`;

export const WinnerTitle = styled.h2`
  text-align: center;
`;

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
