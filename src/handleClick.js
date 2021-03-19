import { grid } from "./app";
import { PLAYER } from "./consts";
import { handleClickUi, handleResult } from "./helpers";

export function handleClick(id) {
  const target = grid.find((el) => el.id === id);
  const cellAbovetarget = grid.find((el) => el.id === id - 10);

  if (target.canTake) {
    (target.taken = true), (target.canTake = false), (target.player = PLAYER);
    cellAbovetarget.canTake = true;
    handleClickUi(id, PLAYER);
  }
  handleResult();
}
