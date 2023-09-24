import React, { useState } from 'react';
import { checkWin } from '../../utils/checkWin';
import {
  RowUi,
  ButtonUi,
  ColumnUi,
  BoardUi,
  ButtonImageUi,
  Title,
  WinnerTitle,
  PlayAgainButton,
  PlayerColor,
  Player1ColorCircle,
  Player2ColorCircle,
  ButtonsContainer,
} from './style';
import { createBoard } from '../../utils/createBoard';

const PLAYER_COLORS = {
  'Player 1': 'red',
  'Player 2': 'green',
};

export function Board({ numberOfColumns, numberOfRows }) {
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState('Player 1');
  const [boardState, setBoardState] = useState(() => {
    return createBoard(numberOfColumns, numberOfRows);
  });

  const buttons = [];
  for (let column = 0; column < numberOfColumns; column++) {
    buttons.push(
      <ButtonUi
        key={column}
        disabled={winner !== null}
        onClick={() => {
          let updatedBoardState = structuredClone(boardState);
          for (let row = numberOfRows - 1; row >= 0; row--) {
            if (updatedBoardState[row][column] === null) {
              updatedBoardState[row][column] = player;
              break;
            }
          }

          setBoardState(updatedBoardState);
          setPlayer(player === 'Player 1' ? 'Player 2' : 'Player 1');
          if (checkWin(updatedBoardState, player)) {
            setWinner(player);
          }
        }}
      >
        <ButtonImageUi src="https://cdn-icons-png.flaticon.com/512/55/55008.png"></ButtonImageUi>
      </ButtonUi>
    );
  }

  const handlePlayAgainClick = () => {
    startGame();
  };

  const startGame = () => {
    setPlayer('Player 1');
    setWinner(null);
    setBoardState(createBoard(numberOfColumns, numberOfRows));
  };

  const isGameDraw =
    !winner &&
    boardState.every((row) => row.every((column) => column !== null));

  return (
    <>
      <Title>4 in a line</Title>

      <PlayerColor>
        Player 1 color:
        <Player1ColorCircle />
      </PlayerColor>

      <PlayerColor>
        Player 2 color:
        <Player2ColorCircle />
      </PlayerColor>

      {boardState.map((row, rowIndex) => (
        <BoardUi>
          <RowUi>
            {row.map((column, columnIndex) => (
              <ColumnUi
                style={{
                  backgroundColor: PLAYER_COLORS[column],
                }}
              >
                {rowIndex} - {columnIndex}
              </ColumnUi>
            ))}
          </RowUi>
        </BoardUi>
      ))}
      <ButtonsContainer>{buttons}</ButtonsContainer>

      <PlayAgainButton onClick={handlePlayAgainClick}>
        Play again
      </PlayAgainButton>

      {winner && <WinnerTitle>The winner is {winner}!</WinnerTitle>}
      {isGameDraw && (
        <WinnerTitle>There were no winners, play again!</WinnerTitle>
      )}
    </>
  );
}
