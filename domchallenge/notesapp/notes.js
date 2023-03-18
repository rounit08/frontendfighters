const addBtn = document.querySelector(".widget_button");
const getBtn = document.querySelector(".get");

let fruits = ["apple", "papaya"];
addBtn.addEventListener("click", function () {
  localStorage.setItem("halwai", fruits);
});

getBtn.addEventListener("click", function () {
  alert(localStorage.getItem("halwai"));
});
