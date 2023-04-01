import React from "react";

// for object extraction
const clock = {
  today: { time: "11:11", date: "1stApril" },
  yesterday: { time: "11:11", date: "31st March" },
  tomorrow: { time: "11:11", date: "2ndApril" },
};

//we can access yesterday's date by using '.' dot operator
// console.log(clock.yesterday.date);
//but how to extract yesterday's date without '.' dot operator
//you guessed it right by DESTRUCTURING
//destructure the object "clock"

let { today, yesterday, tomorrow } = clock;
// console.log(today, tomorrow, yesterday);
// console.log(today.date); //1st april
//if we destructure the object withdifferent key names, error will be thrown
// let { toay, yesterday, tomorrow } = clock;

// console.log(toay.date); //error

//for array extraction
let arr = ["Hi", "I", "am", "Rounit"];
//we access elemes of array using index
// console.log(arr[0]); // Hi
// console.log(arr[1]);//I
// console.log(arr[2]);//  am
// console.log(arr[3]);// Rounit
//destructure the array "arr"

let [a, b, c, d] = arr;
// console.log(a, b, c, d);

function Destructuring() {
  return <div>DESTRUCTURING IN JS</div>;
}

export default Destructuring;
