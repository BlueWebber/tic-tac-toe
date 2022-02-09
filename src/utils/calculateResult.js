const winnerQ = (cells, index1, index2, index3) => {
  if (
    cells[index1].value === cells[index2].value &&
    cells[index2].value === cells[index3].value &&
    cells[index1].value
  ) {
    return cells[index1].value;
  }
  return null;
};

export default function calculateResult(cells) {
  const result =
    winnerQ(cells, 0, 1, 2) ||
    winnerQ(cells, 3, 4, 5) ||
    winnerQ(cells, 6, 7, 8) ||
    winnerQ(cells, 0, 4, 8) ||
    winnerQ(cells, 2, 4, 6) ||
    winnerQ(cells, 1, 4, 7) ||
    winnerQ(cells, 0, 3, 6) ||
    winnerQ(cells, 2, 5, 8);
  if (!cells.filter((cell) => cell.value === null).length && !result) return -1;
  return result;
}
