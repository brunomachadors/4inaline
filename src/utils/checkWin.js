export function checkWin(board, player) {
  let boardRows = board.length;
  let boardColumns = board[0].length;

  for (let col = 0; col < boardColumns; col++) {
    for (let row = 0; row < boardRows; row++) {
      if (
        checkVerticalWinner(board, row, col, player) ||
        checkHorizontalWinner(board, row, col, player) ||
        checkDiagonalWinner(board, row, col, player)
      ) {
        return true;
      }
    }
  }

  return false;
}

function checkVerticalWinner(board, row, col, player) {
  if (
    board[row][col] === player &&
    board[row - 1]?.[col] === player &&
    board[row - 2]?.[col] === player &&
    board[row - 3]?.[col] === player
  ) {
    return true;
  }
}

function checkHorizontalWinner(board, row, col, player) {
  if (
    board[row][col] === player &&
    board[row]?.[col + 1] === player &&
    board[row]?.[col + 2] === player &&
    board[row]?.[col + 3] === player
  ) {
    return true;
  }
}

function checkDiagonalWinner(board, row, col, player) {
  if (
    board[row][col] === player &&
    board[row - 1]?.[col + 1] === player &&
    board[row - 2]?.[col + 2] === player &&
    board[row - 3]?.[col + 3] === player
  ) {
    return true;
  } else if (
    board[row][col] === player &&
    board[row - 1]?.[col - 1] === player &&
    board[row - 2]?.[col - 2] === player &&
    board[row - 3]?.[col - 3] === player
  ) {
    return true;
  }
}
