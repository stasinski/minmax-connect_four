import { COMPUTER } from "../consts";

export const opponentCanHasThreeAfter = (cell, grid) => {
  const index = grid.findIndex((c) => c.id === cell.id);
  grid[index].taken = true;
  grid[index].player = COMPUTER;
  grid[index].canTake = false;

  if (grid[index - 7]) {
    grid[index - 7].canTake = true;
  }

  const filteredGrid = grid.filter((cell) => cell.canTake);
  let value = 0;

  for (let cell of filteredGrid) {
    const mockGrid = JSON.parse(JSON.stringify(grid));
    const targetIndex = mockGrid.findIndex((c) => c.id === cell.id);
    [
      [-1, 1],
      [-1, -2],
      [1, 2],
      [-7, 7],
      [-7, -8],
      [7, 8],
      [-6, 6],
      [-6, -12],
      [6, 12],
      [-8, 8],
      [-8, -16],
      [8, 16],
    ].forEach((option) => {
      if (
        grid[targetIndex + option[0]]?.player &&
        grid[targetIndex + option[0]]?.player ===
          grid[targetIndex + option[1]]?.player
      ) {
        if (grid[targetIndex + option[0]].player === COMPUTER) {
          value += 4;
        } else {
          value += -9;
        }
      }
    });
  }

  return value;
};
