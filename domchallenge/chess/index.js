let color = true;
let cells = null;
let red = null;
//chess(8,8)
const chess = (row, col) => {
  for (let i = 0; i < row; i++) {
    let str = "";
    str += `<div class="row">`;
    for (let j = 0; j < col; j++) {
      if (color) { //true
        str += `<div class="cell white"></div>`;
        color = false;
      } else {
        str += `<div class="cell black" style="color:white"></div>`;
        color = true;
      }
    }
    str += `</div>`;
    board.innerHTML += str;
    if (color) { //false 
      color = false;
    } else {
      color = true;
    }
  }
  updateCells();
};

const highlight = (r, c) => {
  let n = 0;
  let k = 0;
  if (r >= c) {
    n = r - c;
    for (let i = n; i <= 7; i++) {
      rederize(i * 8 + i - n);
    }
  } else {
    k = c - r;
    for (let i = k; i <= 7; i++) {
      rederize((i - k) * 8 + i);
    }
  }

  if (r + c >= 7) {
    for (let i = (r + c) % 7; i <= 7; i++) {
      j = r + c - i;
      rederize(i * 8 + j);
    }
  } else {
    for (let i = 0; i <= r + c; i++) {
      j = r + c - i;
      rederize(i * 8 + j);
    }
  }
};

const rederize = (x) => {
  cells[x].classList.add("red");
};

const updateCells = () => {
  cells = document.querySelectorAll(".cell");
  cells.forEach((item, index) => {
    item.addEventListener("click", () => {
      removeRed();
      let r = Math.floor(index / 8);
      let c = index % 8;
      highlight(r, c);
      updateRed();
    });
  });
};

const updateRed = () => {
  red = document.querySelectorAll(".red");
};

const removeRed = () => {
  if (red === null) {
    return;
  }
  red.forEach(function (item) {
    item.classList.remove("red");
  });
};

chess(8, 8);
