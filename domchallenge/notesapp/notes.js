const saveBtn = document.querySelector(".save");
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

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

saveBtn.addEventListener("click", function (e) {
  let addText = document.getElementById("note");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addText.value = " ";

  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = " ";
  notesObj.forEach(function (element, index) {
    html += `
    <div class = "card">
    <div class = "card-body">
    <p class= "card-text">${element + 1}</p>
    </div>
    </div>
    `;
  });
  let notesElm = document.getElementById("id");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  }
}
