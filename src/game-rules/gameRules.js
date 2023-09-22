let board = Array(7).fill([]);

board.forEach((column, index) => {
  column = Array(6).fill(null);
  board[index] = column;
});

console.log(board);

let playerOne = 'X';
let playerTwo = 'O';

//game  simulation
checkColumn(board[0], playerOne);
checkColumn(board[1], playerTwo);
checkColumn(board[0], playerOne);
checkColumn(board[2], playerTwo);
checkColumn(board[0], playerOne);
checkColumn(board[5], playerTwo);

console.log(board);

function checkColumn(column, player) {
  for (let i = column.length - 1; i >= 0; i--) {
    if (column[i] === null) {
      column[i] = player;
      return column;
    }
  }
}
