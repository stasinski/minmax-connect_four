import { checkBord } from "../checkBoard";
import { COMPUTER, PLAYER } from "../consts";

export const doubleThree = (cell, grid) => {
  const index = grid.findIndex((c) => c.id === cell.id);
  grid[index].taken = true;
  grid[index].player = COMPUTER;
  grid[index].canTake = false;

  if (grid[index - 7]) {
    grid[index - 7].canTake = true;
  }

  const filteredGrid = grid.filter((cell) => cell.canTake);

  let computerCount = 0;
  let playerCanHaveDoubleThree = false;
  let value = 0;

  // computer double three
  for (let cell of filteredGrid) {
    const mockGrid = JSON.parse(JSON.stringify(grid));
    const mocktarget = mockGrid.find((c) => c.id === cell.id);
    mocktarget.taken = true;
    mocktarget.player = COMPUTER;
    mocktarget.canTake = false;
    const result = checkBord(mockGrid);
    if (result === COMPUTER) {
      computerCount++;
    }
  }

  // player double three
  // !IMPORTANT I'm not sure if it works the way I think it works
  for (let cell of filteredGrid) {
    const mockGrid = JSON.parse(JSON.stringify(grid));
    const mockedIndex = grid.findIndex((c) => c.id === cell.id);
    mockGrid[mockedIndex].taken = true;
    mockGrid[mockedIndex].player = PLAYER;
    mockGrid[mockedIndex].canTake = false;

    if (mockGrid[mockedIndex - 7]) {
      mockGrid[mockedIndex - 7].canTake = true;
    }

    const filteredMockedGrid = mockGrid.filter((cell) => cell.canTake);

    let playerCount = 0;

    for (let mockedCell of filteredMockedGrid) {
      const mockGrid2 = JSON.parse(JSON.stringify(mockGrid));
      const mocktarget = mockGrid2.find((c) => c.id === mockedCell.id);
      mocktarget.taken = true;
      mocktarget.player = PLAYER;
      mocktarget.canTake = false;

      const result = checkBord(mockGrid2);
      if (result === PLAYER) {
        playerCount++;
      }
      if (playerCount > 1) {
        playerCanHaveDoubleThree = true;
        break;
      }
    }
  }
  if (computerCount > 1) {
    value += 70;
  }
  if (playerCanHaveDoubleThree) {
    value += -50;
  }
  return value;
};
