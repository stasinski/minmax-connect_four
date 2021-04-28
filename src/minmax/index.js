import { grid } from "../app";
import { winInOne } from "./winInOne";
import { closeNeughbours } from "./closeNeighbors";
import { twoInRow } from "./twoInRow";
import { twoInCol } from "./twoInCol";
import { opponentWinInOne } from "./opponentWinInOne";
import { opponentCanWinAfter } from "./opponentCanWinAfter";
import { diagonalExpand } from "./diagonalExpand";
import { opponentCanHasThreeAfter } from "./opponentCanHasThreeAfter";
import { opponentCanBlockWinningMove } from "./opponentCanBlockWin";
import { doubleThree } from "./doubleThree";

export const computerResponse = () => {
  const filteredGrid = grid.filter((cell) => cell.canTake);

  let bestMove;

  for (let cell of filteredGrid) {
    let mockGrid;
    let value = 0;
    // win in one
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountIsWinInOne = winInOne(cell, mockGrid);
    value += amountIsWinInOne;

    // close neighbors
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountOfCloseNeighbours = closeNeughbours(cell, mockGrid);
    value += amountOfCloseNeighbours;

    // block if opponent has two in row
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountTwoInRow = twoInRow(cell, mockGrid);
    value += amountTwoInRow;

    // block column expand
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountTwoInCol = twoInCol(cell, mockGrid);
    value += amountTwoInCol;

    // block diagonal expand
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountDiagonalExpand = diagonalExpand(cell, mockGrid);
    value += amountDiagonalExpand;

    // block if opponent has win in one
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountOpponentWinInOne = opponentWinInOne(cell, mockGrid);
    value += amountOpponentWinInOne;

    // opponent can win after this move
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountOpponentCanWinAfter = opponentCanWinAfter(cell, mockGrid);
    value += amountOpponentCanWinAfter;

    // opponent can has 3/4 after this move
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountOpponentCanHasThreeAfter = opponentCanHasThreeAfter(
      cell,
      mockGrid
    );
    value += amountOpponentCanHasThreeAfter;

    // opponent can block winning move
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountOpponentCanBlockWinningMove = opponentCanBlockWinningMove(
      cell,
      mockGrid
    );
    value += amountOpponentCanBlockWinningMove;

    // can have double three
    mockGrid = JSON.parse(JSON.stringify(grid));
    const amountCanHaveDoubleThree = doubleThree(cell, mockGrid);
    value += amountCanHaveDoubleThree;

    // swap best move
    if (!bestMove || (bestMove && bestMove.value < value)) {
      bestMove = { id: cell.id, value: value };
      // make random move if two with the same value
    } else if (bestMove && bestMove.value === value) {
      if (Math.random() < 0.5) {
        bestMove = { id: cell.id, value: value };
      }
    }
  }

  if (bestMove) {
    return bestMove.id;
  }
  const choose = Math.floor(Math.random() * filteredGrid.length);
  return filteredGrid[choose].id;
};
