import { checkBord } from "../checkBoard";
import { PLAYER } from "../consts";

export const opponentWinInOne = (cell, grid) => {
  const target = grid.find((c) => c.id === cell.id);

  target.taken = true;
  (target.player = PLAYER), (target.canTake = false);
  const result = checkBord(grid);
  if (result === PLAYER) {
    return 80;
  }
  return 0;
};
