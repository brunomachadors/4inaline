import React, { useState } from 'react';
import Square from '../Square';

const Board = (props) => {
  const [squares, setSquares] = useState(Array(42).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const { numberOfColumns, numberOfLines } = props;
  const gameMatrix = new Array(numberOfLines).fill(
    new Array(numberOfColumns).fill(undefined)
  );

  const handleClick = (i) => {
    console.log(i);
    const newSquares = squares.slice();

    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <>
      {gameMatrix.map((line) => (
        <div style={{ display: 'flex' }}>
          {line.map((column) => (
            <div
              style={{
                margin: '4px',
                width: '20px',
                height: '20px',
                backgroundColor: 'green',
              }}
            ></div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
