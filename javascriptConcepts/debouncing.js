//debouncing
//it's limits the execution of a function call and waits for certain amount of time to execute
//example: search box of flipkart/amazon when we search something in it, the results takes certain amount of time to render
// suppose we have set 400ms from debouncing to call an api in search bar
//so if we stop for time > 400ms then we get desired results but if time < 400ms then we don't get any result in the search bar

//we use this debouncing to make system feasible
//meant if we call api for search items for every letters then we get webbed in the infinite api calls followed by fallacies

//button press debounce ========
//question - Create a button UI and add debounce as follows
//--> shown button pressed X times evey time the button pressed
// --> increase triggered y times count after 800ms of debounce

//solution:-
const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

//this _.debounce function comes from lodash
//paste this in your html
// {/* <script
//   src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
//   integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
//   crossorigin="anonymous"
//   referrerpolicy="no-referrer"
// ></script>; */}

const debouncedCount = _.debounce(() => {
  count.innerHTML = ++triggerCount;
}, 800);
//after 800ms we get  triggered incremented

btn.addEventListener("click", () => {
  btnPress.innerHTML = ++pressedCount;
  debouncedCount();
});
