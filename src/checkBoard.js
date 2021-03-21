import { winningArrays } from "./winningArrays";

export const checkBord = (grid) => {
  let result = null;
  for (let i = 0; i < winningArrays.length; i++) {
    const sq1 = grid[winningArrays[i][0]];
    const sq2 = grid[winningArrays[i][1]];
    const sq3 = grid[winningArrays[i][2]];
    const sq4 = grid[winningArrays[i][3]];

    if (
      sq1.player &&
      sq1.player === sq2.player &&
      sq1.player === sq3.player &&
      sq1.player === sq4.player
    ) {
      console.log(grid);
      result = sq1.player;
      break;
    }
  }
  return result;
};
