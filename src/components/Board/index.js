import React from 'react';
import { insertCoin } from '../../utils/gameRules.js';

const Board = (props) => {
  /*const [squares, setSquares] = useState(Array(42).fill(null));
  const [xIsNext, setXIsNext] = useState(true);*/
  /*const handleClick = (i) => {
    console.log(i);
    const newSquares = squares.slice();

    if (xIsNext) {
      newSquares[i] = 'X';
    } else {
      newSquares[i] = 'O';
    }

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };*/

  const { numberOfColumns, numberOfLines } = props;
  const gameMatrix = new Array(numberOfColumns).fill(
    new Array(numberOfLines).fill(null)
  );

  return (
    <div style={{ display: 'flex' }}>
      {gameMatrix.map((column, index) => (
        <div
          key={`column-${index}`}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {column.map((line, index) => (
            <div
              key={`line-${index}`}
              style={{
                margin: '4px',
                width: '20px',
                height: '20px',
                backgroundColor: 'green',
              }}
            ></div>
          ))}
          <button
            type="button"
            onClick={() => insertCoin(gameMatrix[0], 'red')}
          >
            {index + 1}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Board;
