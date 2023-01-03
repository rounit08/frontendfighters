let grid = document.getElementById("grid");
let currentColor;

function makingGrid(gridNumber) {
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= gridNumber; i++) {
    const iElem = document.createElement("div");
    iElem.classList.add("box");
    iElem.dataset.boxNumber = i;
    fragment.appendChild(iElem);
  }
  grid.appendChild(fragment);

  let boxes = document.querySelectorAll(".box");
  boxes.forEach((box, index) => {
    box.addEventListener("click", (e) => getBoxes(e, box, boxes.length));
    if (index >= boxes.length - 7) {
      box.style.backgroundColor = generateRandomColor();
    }
  });
}

function getBoxes(e, box, size) {
  let boxNumber = e.target.dataset.boxNumber;
  if (boxNumber < size - 6) {
    if (currentColor) {
      box.style.backgroundColor = currentColor;
    } else {
      console.log("no colour is active");
    }
  } else {
    currentColor = box.style.backgroundColor;
    console.log("New Background added", currentColor);
  }
}

function generateRandomColor() {
  let max = 0xffffff; // 16777215
  let randomNumber = Math.random() * max;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randomColor = randomNumber.padStart(6, 0);
  return `#${randomColor}`;
}

makingGrid(70);
