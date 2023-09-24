import React, { useState } from 'react';
import { checkWin } from '../../utils/checkWin';
import {
  RowUi,
  ButtonUi,
  ButtonsUi,
  ColumnUi,
  BoardUi,
  ButtonImageUi,
  Title,
} from './style';

export function Board({ numberOfColumns, numberOfRows }) {
  const [player, setPlayer] = useState('red');
  const [boardState, setBoardState] = useState(() => {
    return Array.from({ length: numberOfRows }).map(() =>
      Array.from({ length: numberOfColumns }).map(() => null)
    );
  });

  const buttons = [];
  for (let column = 0; column < numberOfColumns; column++) {
    buttons.push(
      <ButtonUi
        key={column}
        onClick={() => {
          setPlayer(player === 'red' ? 'green' : 'red');
          let updatedBoardState = structuredClone(boardState);
          for (let row = numberOfRows - 1; row >= 0; row--) {
            if (updatedBoardState[row][column] === null) {
              updatedBoardState[row][column] = player;
              break;
            }
          }

          setBoardState(updatedBoardState);
          checkWin(updatedBoardState, player);
        }}
      >
        <ButtonImageUi src="https://cdn-icons-png.flaticon.com/512/55/55008.png"></ButtonImageUi>
        {column + 1}
      </ButtonUi>
    );
  }

  return (
    <>
      <Title>4 in a line</Title>
      {boardState.map((row, rowIndex) => (
        <BoardUi>
          <RowUi key={`row-${rowIndex}`}>
            {row.map((column, columnIndex) => (
              <ColumnUi
                key={`row-${columnIndex}`}
                style={{
                  backgroundColor: column,
                }}
              >
                {rowIndex} - {columnIndex}
              </ColumnUi>
            ))}
          </RowUi>
        </BoardUi>
      ))}
      <ButtonsUi>{buttons}</ButtonsUi>
    </>
  );
}
