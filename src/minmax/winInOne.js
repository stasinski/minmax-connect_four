import { checkBord } from "../checkBoard";
import { COMPUTER } from "../consts";

export const winInOne = (cell, grid) => {
  const target = grid.find((c) => c.id === cell.id);

  target.taken = true;
  (target.player = COMPUTER), (target.canTake = false);
  const result = checkBord(grid);
  if (result === COMPUTER) {
    return 1000;
  }
  return 0;
};
