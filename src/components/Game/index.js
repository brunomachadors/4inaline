import { useState } from "react";
import { Board } from "../Board";
import { GameUi } from "./style";
import { createBoard } from "../../utils/createBoard";
import { checkWin } from "../../utils/checkWin";

const Game = () => {
  const numberOfColumns = 7;
  const numberOfRows = 6;
  const [player, setPlayer] = useState("player1");
  const [winner, setWinner] = useState(null);
  const [boardState, setBoardState] = useState(() => {
    return createBoard(numberOfColumns, numberOfRows);
  });

  const startGame = () => {
    setPlayer("player1");
    setWinner(null);
    setBoardState(createBoard(numberOfColumns, numberOfRows));
  };

  const handlePlay = (column) => {
    let updatedBoardState = structuredClone(boardState);
    for (let row = numberOfRows - 1; row >= 0; row--) {
      if (updatedBoardState[row][column] === null) {
        updatedBoardState[row][column] = player;
        break;
      }
    }

    setBoardState(updatedBoardState);
    setPlayer(player === "player1" ? "player2" : "player1");
    if (checkWin(updatedBoardState, player)) {
      setWinner(player);
    }
  };

  const draw =
    !winner &&
    boardState.every((row) => row.every((column) => column !== null));

  return (
    <GameUi>
      <Board
        numberOfColumns={7}
        numberOfRows={6}
        onPlay={handlePlay}
        winner={winner}
        onStartGame={startGame}
        boardState={boardState}
        draw={draw}
      />
    </GameUi>
  );
};

export default Game;
