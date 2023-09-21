import React, { useState } from "react";
import Square from "../Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i) => {
    const newSquares = squares.slice();

    newSquares[i] = "O";

    setSquares(newSquares);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
        {renderSquare(10)}
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
      </div>
      <div className="board-row">
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
        {renderSquare(17)}
        {renderSquare(18)}
        {renderSquare(19)}
        {renderSquare(20)}
      </div>
      <div className="board-row">
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
        {renderSquare(27)}
      </div>
      <div className="board-row">
        {renderSquare(28)}
        {renderSquare(29)}
        {renderSquare(30)}
        {renderSquare(31)}
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
      </div>
      <div className="board-row">
        {renderSquare(35)}
        {renderSquare(36)}
        {renderSquare(37)}
        {renderSquare(38)}
        {renderSquare(39)}
        {renderSquare(40)}
        {renderSquare(41)}
      </div>
    </div>
  );
};

export default Board;
