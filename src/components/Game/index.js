import { Board } from '../Board';
import { GameUi } from './style';

const Game = () => {
  return (
    <GameUi>
      <Board numberOfColumns={7} numberOfRows={6} />
    </GameUi>
  );
};

export default Game;
