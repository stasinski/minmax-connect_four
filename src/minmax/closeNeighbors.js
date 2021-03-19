import { COMPUTER, PLAYER } from "../consts";

export const closeNeughbours = (cell, grid) => {
  const cellIndex = grid.findIndex((c) => c.id === cell.id);
  let value = 0;

  [-1, 1, -7, 7, -6, 6, -8, 8].forEach((neighbour) => {
    if (grid[cellIndex + neighbour]) {
      const same = grid[cellIndex + neighbour].player === COMPUTER;
      const opposit = grid[cellIndex + neighbour].player === PLAYER;
      if (same) {
        value += 5;
      } else if (opposit) {
        value += 2.5;
      }
    } else {
      value -= 0.9;
    }
  });
  return value;
};
