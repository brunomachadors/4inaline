export function checkWin(board, player) {
  let boardRows = board.length;
  let boardColumns = board[0].length;

  // vertical wins
  for (let col = 0; col < boardColumns; col++) {
    for (let row = 0; row < boardRows; row++) {
      if (
        board[row][col] === player &&
        board[row - 1][col] === player &&
        board[row - 2][col] === player &&
        board[row - 3][col] === player
      ) {
        console.log('WINNER  VERTICAL ' + player);
        return true;
      }
    }
  }

  // horizontal wins
  for (let col = 0; col < boardColumns; col++) {
    for (let row = 0; row < boardRows; row++) {
      if (
        board[row][col] === player &&
        board[row][col + 1] === player &&
        board[row][col + 2] === player &&
        board[row][col + 3] === player
      ) {
        console.log('WINNER HORIZONTAL' + player);
        return true;
      }
    }
  }

  // diagonal wins (from left to right)
  for (let col = 0; col < boardColumns; col++) {
    for (let row = 0; row < boardRows; row++) {
      if (
        board[row][col] === player &&
        board[row - 1][col + 1] === player &&
        board[row - 2][col + 2] === player &&
        board[row - 3][col + 3] === player
      ) {
        console.log('WINNER LEFT TO RIGHT ' + player);
        return true;
      }
    }
  }

  // diagonal wins (from top-right to bottom-left)
  for (let col = 0; col < boardColumns; col++) {
    for (let row = 0; row < boardRows; row++) {
      if (
        board[row][col] === player &&
        board[row - 1][col - 1] === player &&
        board[row - 2][col - 2] === player &&
        board[row - 3][col - 3] === player
      ) {
        console.log('WINNER RIGHT TO LEFT ' + player);
        return true;
      }
    }
  }

  return false;
}
