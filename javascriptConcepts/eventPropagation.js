// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

//eventpropagation
//default event bubbling- bottom's up
// before moving ahead, some events donot bubble, like focus etc
////////////////////////////////////////////////////
// button.addEventListener("click", function () {
//   alert("button is selected");
// });
// form.addEventListener("click", function () {
//   alert("form is selected");
// });
// div.addEventListener("click", function () {
//   alert("div is selected");
// });
////////////////////////////////////////////////////

// event.target VS this.target vs event.currentTarget
////////////////////////////////////////////////////
// const funky = (event) => {
//   alert(
//     "current target =" +
//       event.currentTarget.tagName +
//       ", target = " +
//       event.target.tagName +
//       ", this = " +
//       this.tagName
//   );
// };

// button.addEventListener("click", funky);
// form.addEventListener("click", funky);
// div.addEventListener("click", funky);
///////////////////////////////////////////////////

//event Capturing / Trickling(top to bottom)
//////////////////////////////////////////////////

// div.addEventListener(
//   "click",
//   function () {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );

// because of this capture, topToBottom will happen but here's a catch
//capture is true for div only, when button is clicked
// we will get div -> button -> form
// not div->form-> button, becuase for button and from default is bubbling

// form.addEventListener(
//   "click",
//   function () {
//     alert("form");
//   },
//   {
//     capture: true, //added capture here too to resolv issue in line 53
//   }
// );
// button.addEventListener("click", function () {
//   alert("button");
// });

//!bubbling !capturing
// this means if button is clicked then only button renders
///////////////////////////////////////////////////////////

// button.addEventListener("click", function (e) {
//   alert("button");
//   e.stopPropagation();
// });
// form.addEventListener("click", function (e) {
//   e.stopPropagation();

//   alert("form");
// });
// div.addEventListener("click", function (e) {
//   e.stopPropagation();
//   alert("div");
// });

///////////////////////////////////////////////////////////

//Event delegation

// document.querySelector(".products").addEventListener("click", (event) => {
//   if (event.target.tagName === "SPAN") {
//     window.location.href += "/" + event.target.className;
//   }
// });

///////////////////////////////////////////////////////////////////
//Ques = Create a Modal which closes by clicking on negative space?

// const container = document.querySelector(".modalContainer");

// const button = document.querySelector(".modalButton");

// button.addEventListener("click", () => {
//   toggleModal(true);
// });

// function toggleModal(toggle) {
//   container.style.display = toggle ? "flex" : "none";
// }

// container.addEventListener("click", (e) => {
//   if (e.target.className === "modalContainer") toggleModal(false);
// });
