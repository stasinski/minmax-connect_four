import { grid } from "../app";

export const computerResponse = () => {
  const filteredGrid = grid.filter((cell) => cell.canTake);
  const choose = Math.floor(Math.random() * filteredGrid.length);

  // return filteredGrid[choose].id;
  return 11;
};
