import { checkBord } from "../checkBoard";
import { COMPUTER } from "../consts";

export const opponentCanBlockWinningMove = (cell, grid) => {
  const index = grid.findIndex((c) => c.id === cell.id);
  grid[index].taken = true;
  grid[index].player = COMPUTER;
  grid[index].canTake = false;

  if (grid[index - 7]) {
    grid[index - 7].canTake = true;
  }

  const filteredGrid = grid.filter((cell) => cell.canTake);

  for (let cell of filteredGrid) {
    const mockGrid = JSON.parse(JSON.stringify(grid));
    const mocktarget = mockGrid.find((c) => c.id === cell.id);
    mocktarget.taken = true;
    mocktarget.player = COMPUTER;
    mocktarget.canTake = false;
    const result = checkBord(mockGrid);

    if (result === COMPUTER) {
      return -25;
    }
  }
  return 0;
};
