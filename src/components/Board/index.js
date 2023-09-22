import React, { useState } from 'react';
import Square from '../Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(42).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

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

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  return (
    <div className="game">
      <div className="board-column">
        {renderSquare(11)}
        {renderSquare(12)}
        {renderSquare(13)}
        {renderSquare(14)}
        {renderSquare(15)}
        {renderSquare(16)}
      </div>
      <div className="board-column">
        {renderSquare(21)}
        {renderSquare(22)}
        {renderSquare(23)}
        {renderSquare(24)}
        {renderSquare(25)}
        {renderSquare(26)}
      </div>
      <div className="board-column">
        {renderSquare(31)}
        {renderSquare(32)}
        {renderSquare(33)}
        {renderSquare(34)}
        {renderSquare(35)}
        {renderSquare(36)}
      </div>
      <div className="board-column">
        {renderSquare(41)}
        {renderSquare(42)}
        {renderSquare(43)}
        {renderSquare(44)}
        {renderSquare(45)}
        {renderSquare(46)}
      </div>
      <div className="board-column">
        {renderSquare(51)}
        {renderSquare(52)}
        {renderSquare(53)}
        {renderSquare(54)}
        {renderSquare(55)}
        {renderSquare(56)}
      </div>
      <div className="board-column">
        {renderSquare(61)}
        {renderSquare(62)}
        {renderSquare(63)}
        {renderSquare(64)}
        {renderSquare(65)}
        {renderSquare(66)}
      </div>

      <div className="board-column">
        {renderSquare(71)}
        {renderSquare(72)}
        {renderSquare(73)}
        {renderSquare(74)}
        {renderSquare(75)}
        {renderSquare(76)}
      </div>
    </div>
  );
};

export default Board;
