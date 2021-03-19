import { grid, toogleFinished } from "./app";
import { checkBord } from "./checkBoard";
import { PLAYER } from "./consts";

const resultEl = document.getElementById("winner");

export const initialGrid = () => {
  let count = -1;
  return new Array(42).fill(0).map((el) => {
    count++;
    return {
      taken: false,
      // player or computer or null
      player: null,
      id: +count.toString(7) + 11,
      canTake: count > 34,
    };
  });
};

export const handleClickUi = (id, player) => {
  const el = document.querySelector(`[data-id='${id}']`);
  if (player === PLAYER) {
    el.classList.add("player");
  } else {
    el.classList.add("computer");
  }
};

export function resetUi(squares) {
  squares.forEach((square) => {
    square.classList.remove("player");
    square.classList.remove("computer");
  });
  resultEl.textContent = "";
}

export function handleResult() {
  const result = checkBord(grid);
  if (result) {
    toogleFinished();
    resultEl.textContent = `${result} won!`;
  }
}
