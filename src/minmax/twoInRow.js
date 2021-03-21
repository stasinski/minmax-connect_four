import { PLAYER } from "../consts";

export const twoInRow = (cell, grid) => {
  const cellIndex = grid.findIndex((c) => c.id === cell.id);
  let value = 0;

  if (grid[cellIndex - 1]?.taken && grid[cellIndex - 2]?.taken) {
    if (grid[cellIndex - 1].player === PLAYER) {
      value += 15;
    } else {
      value += 6;
    }
  } else if (grid[cellIndex + 1]?.taken && grid[cellIndex + 2]?.taken) {
    if (grid[cellIndex + 1].player === PLAYER) {
      value += 15;
    } else {
      value += 6;
    }
  }

  return value;
};
