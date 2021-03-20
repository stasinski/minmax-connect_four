import { PLAYER } from "../consts";

export const twoInCol = (cell, grid) => {
  const cellIndex = grid.findIndex((c) => c.id === cell.id);
  let value = 0;

  if (grid[cellIndex + 7]?.taken && grid[cellIndex + 14]?.taken) {
    if (grid[cellIndex + 7].player === PLAYER) {
      value += 20;
    } else {
      value += 7;
    }
  }
  return value;
};
