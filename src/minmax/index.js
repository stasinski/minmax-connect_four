import { grid } from "../app";

export const computerResponse = () => {
  const filteredGrid = grid.filter((cell) => cell.canTake);
  const choose = Math.floor(Math.random() * filteredGrid.length);

  console.log(choose);

  return filteredGrid[choose].id;
};
