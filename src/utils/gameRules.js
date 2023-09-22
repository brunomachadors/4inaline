export function insertCoin(column, player) {
  for (let i = column.length - 1; i >= 0; i--) {
    if (column[i] === null) {
      column[i] = player;
      return column;
    }
  }
}
