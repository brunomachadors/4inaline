import { RowUi, ColumnUi, BoardUi } from "./style";
import {
  ButtonImageUi,
  ButtonUi,
  ButtonsContainer,
  PlayAgainButton,
} from "../Buttons/style";
import {
  Player1ColorCircle,
  Player2ColorCircle,
  PlayerColor,
  PlayerContainer,
  WinnerTitle,
} from "../Player/style";
import { Rules, Title } from "../Game/style";
import { PLAYER_COLORS } from "../../utils/playerColors";

export function Board({
  numberOfColumns,
  onPlay,
  winner,
  onStartGame,
  boardState,
  draw,
}) {
  const debugMode = false;
  const buttons = [];

  for (let column = 0; column < numberOfColumns; column++) {
    buttons.push(
      <ButtonUi
        key={column}
        disabled={winner !== null}
        onClick={() => onPlay(column)}
      >
        <ButtonImageUi src="https://cdn-icons-png.flaticon.com/512/55/55008.png"></ButtonImageUi>
      </ButtonUi>
    );
  }

  return (
    <>
      <Title>4 in a line</Title>

      <Rules>
        The four in a row rules are very simple. It's always played with 2
        players and in a 7x6 grid. Each turn each player puts a piece of his
        color inside a column and it will fall until it reaches the lowest
        available spot. The one who can put 4 pieces of the same color in a row
        horizontally, vertically or diagonally wins. If no one manages to do it
        then the match ends in a draw.
      </Rules>

      <PlayAgainButton onClick={onStartGame}>Play again</PlayAgainButton>

      {boardState.map((row, rowIndex) => (
        <BoardUi>
          <RowUi>
            {row.map((column, columnIndex) => (
              <ColumnUi
                style={{
                  backgroundColor: PLAYER_COLORS[column],
                }}
              >
                {debugMode ? rowIndex + " - " + columnIndex : null}
              </ColumnUi>
            ))}
          </RowUi>
        </BoardUi>
      ))}
      <ButtonsContainer>{buttons}</ButtonsContainer>

      <PlayerContainer>
        <PlayerColor>
          Player 1:
          <Player1ColorCircle
            style={{
              backgroundColor: PLAYER_COLORS.player1,
            }}
          />
        </PlayerColor>

        <PlayerColor>
          Player 2:
          <Player2ColorCircle
            style={{
              backgroundColor: PLAYER_COLORS.player2,
            }}
          />
        </PlayerColor>
      </PlayerContainer>

      {winner && <WinnerTitle>The winner is {winner}!</WinnerTitle>}
      {draw && <WinnerTitle>There were no winners, play again!</WinnerTitle>}
    </>
  );
}
