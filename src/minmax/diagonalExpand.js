import { PLAYER } from "../consts";

export const diagonalExpand = (cell, grid) => {
  const cellIndex = grid.findIndex((c) => c.id === cell.id);
  let value = 0;

  if (grid[cellIndex - 6]?.taken && grid[cellIndex + 6]?.taken) {
    if (grid[cellIndex - 6].player === PLAYER) {
      value += 15;
    } else {
      value += 8;
    }
  }
  if (grid[cellIndex + 8]?.taken && grid[cellIndex - 8]?.taken) {
    if (grid[cellIndex + 8].player === PLAYER) {
      value += 15;
    } else {
      value += 8;
    }
  }

  return value;
};
