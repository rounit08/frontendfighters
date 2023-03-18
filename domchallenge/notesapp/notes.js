const getBtn = document.querySelector(".get");
const form = document.querySelector(".form");

//===================

function popupOpen() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
// Popup Close
function popupClose() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// `form.addEventListener("click", function (e) {
//   e.preventDefault();
// });`

function addNote() {
  var newElement = document.createElement("p");
  newElement.innerHTML = "CONTENTS";
  localStorage.setItem("item", JSON.stringify(newElement));
  // document.getElementById("id").appendChild(newElement);
}

document
  .getElementById("id")
  .appendChild(JSON.parse(localStorage.getItem("item")));
