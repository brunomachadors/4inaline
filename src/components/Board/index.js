import React, { useState } from 'react';
import { checkWin } from '../../utils/checkWin';

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
      <button
        key={column}
        style={{
          margin: '4px',
          padding: '0px',
          width: '40px',
          height: '40px',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPlayer(player === 'red' ? 'green' : 'red');
          const updatedBoardState = structuredClone(boardState);
          for (let row = numberOfRows - 1; row >= 0; row--) {
            if (updatedBoardState[row][column] === null) {
              updatedBoardState[row][column] = player;
              break;
            }
          }

          setBoardState(updatedBoardState);
          //console.log(updatedBoardState);
          checkWin(updatedBoardState, player);
        }}
      >
        {column + 1}
      </button>
    );
  }

  return (
    <>
      {boardState.map((row, rowIndex) => (
        <div key={`row-${rowIndex}`} style={{ display: 'flex' }}>
          {row.map((column, columnIndex) => (
            <div
              key={`row-${columnIndex}`}
              style={{
                margin: '4px',
                width: '40px',
                height: '40px',
                backgroundColor: column,
                border: '1px solid black',
              }}
            >
              {rowIndex} - {columnIndex}
            </div>
          ))}
        </div>
      ))}
      {buttons}
    </>
  );
}
