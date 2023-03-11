//throttling
//on twitter, when we scroll upto a certain limit then we see a popup in top for more posts
// ad this is possible because of throttling
//idea is suppose we ar scrolling and a function notices on the place till i have scrolled
//and if that function finds out that we are at some height(let's say 400px) above the max height of the phone from bottom
//then function will call an API

//ques create a button UI and add throttle as follows
// --> show button pressed x times, everytime the button is pressed
// --> increase triggered y times every 800ms of throttle

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;
const throttleTriggered = _.throttle(() => {
  count.innerHTML = ++triggerCount;
}, 800);
btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  throttleTriggered();
});
