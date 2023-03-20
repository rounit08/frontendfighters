let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const winning = () => {
  let wins = [[], [], [], []];
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtxt = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtxt.innerText === "") boxtxt.innerText = turn;
    turn = changeTurn();
    winning();
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
  });
});
