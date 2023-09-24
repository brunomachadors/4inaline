export function createBoard(numberOfColumns, numberOfRows) {
  return Array.from({ length: numberOfRows }).map(() =>
    Array.from({ length: numberOfColumns }).map(() => null)
  );
}
