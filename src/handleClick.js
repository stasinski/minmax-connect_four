import { grid } from "./app";
import { COMPUTER, PLAYER } from "./consts";
import { handleClickUi, handleResult } from "./helpers";
import { computerResponse } from "./minmax";

export function handleClick(id) {
  const target = grid.find((el) => el.id === id);
  const cellAbovetarget = grid.find((el) => el.id === id - 10);

  if (target.canTake) {
    (target.taken = true), (target.canTake = false), (target.player = PLAYER);
    cellAbovetarget && (cellAbovetarget.canTake = true);
    handleClickUi(id, PLAYER);
  }
  handleResult();
  handleComputer();
}

export function handleComputer() {
  const choosenCell = computerResponse();
  const target = grid.find((el) => el.id === choosenCell);
  const cellAbovetarget = grid.find((el) => el.id === choosenCell - 10);

  (target.taken = true), (target.canTake = false), (target.player = PLAYER);
  cellAbovetarget && (cellAbovetarget.canTake = true);

  handleClickUi(choosenCell, COMPUTER);
  handleResult();
}
