import { grid } from "../app";
import { winInOne } from "./winInOne";
import { closeNeughbours } from "./closeNeighbors";

export const computerResponse = () => {
  const filteredGrid = grid.filter((cell) => cell.canTake);

  let bestMove;

  for (let cell of filteredGrid) {
    let mockGrid;
    let value = 0;
    // win in one
    mockGrid = JSON.parse(JSON.stringify(grid));
    const isWinInOne = winInOne(cell, mockGrid);
    if (isWinInOne) {
      value += 1000;
    }
    // close neighbors
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountOfCloseNeighbours = closeNeughbours(cell, mockGrid);
    value += amountOfCloseNeighbours;

    if ((!bestMove && value) || (bestMove && bestMove.value < value)) {
      bestMove = { id: cell.id, value: value };
    }
  }

  if (bestMove) {
    return bestMove.id;
  }
  const choose = Math.floor(Math.random() * filteredGrid.length);
  return filteredGrid[choose].id;
};
