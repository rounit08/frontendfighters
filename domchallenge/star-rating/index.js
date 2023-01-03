//selected all stars with queryselectors
const stars = document.querySelectorAll(".star");
// console.log(stars);

//selected the rating span from html
const output = document.querySelector(".output");

//a for loop to iterate over stars' length
for (i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  ["click", "mouseover", "mouseout"].forEach(function (e) {
    // a for each loop to give functions to each stars
    stars[i].addEventListener(e, showRating);
  });
}

function showRating(e) {
  let type = e.type; // type will detect, click, mouseover, mouseout(that's what user does)
  let starValue = this.starValue;

  stars.forEach(function (elem, index) {
    if (type === "click") {
      if (index < starValue) {
        elem.classList.add("yellow"); // classList has diff properties like add, remove, toggle etc... we can add dynamic classes with it
      } else {
        elem.classList.remove("yellow");
      }
    }

    if (type === "mouseover") {
      if (index < starValue) {
        elem.classList.add("yellow");
      } else {
        elem.classList.remove("yellow");
      }
    }

    if (type === "mouseout") {
      {
        elem.classList.remove("yellow");
      }
    }
  });

  if (type === "click") {
    if (starValue > 1) {
      output.innerHTML = "You Rated " + starValue + "stars";
    }
  }
}
