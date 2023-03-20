let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

let gameOver = false;

const winning = () => {
  let boxtexts = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + " WON";
      gameOver = true;
    }
  });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtxt = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtxt.innerText === "") boxtxt.innerText = turn;
    turn = changeTurn();
    winning();
    if (!gameOver) {
      document.getElementsByClassName("info")[0].innerText =
        "Turn for" + " " + turn;
    }
  });
});

const resetButton = document.getElementById("resetButton");

function resetGame() {
  let boxText = document.querySelectorAll(".boxtext");
  Array.from(boxText).forEach((element) => {
    element.innerText = " ";
  });
}
resetButton.addEventListener("click", resetGame);
