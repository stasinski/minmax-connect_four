import { handleClick } from "./handleClick";
import { initialGrid, resetUi } from "./helpers";
import "./style.css";

const squares = document.querySelectorAll("[data-id]");
const restart = document.getElementById("restart");

let firstStart = true;
let finished = false;
export let grid;

// you can not export finished and change it in another file :(
export const toogleFinished = () => {
  finished = true;
};

function startGame() {
  grid = initialGrid();
  resetUi(squares);

  if (firstStart) {
    firstStart = false;
    squares.forEach((square) => {
      square.addEventListener("click", () => {
        if (!finished) {
          const id = +square.dataset.id;
          handleClick(id);
        }
      });
    });
  }
}

startGame();

restart.addEventListener("click", startGame);
