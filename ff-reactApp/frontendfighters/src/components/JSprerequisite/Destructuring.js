import React from "react";

const clock = {
  today: { time: "11:11", date: "1stApril" },
  yesterday: { time: "11:11", date: "31st March" },
  tomorrow: { time: "11:11", date: "2ndApril" },
};

//we can access yesterday's date by using '.' dot operator
// console.log(clock.yesterday.date);
//but how to extract yesterday's date without '.' dot operator
//you guessed it right by DESTRUCTURING
function Destructuring() {
  return <div>DESTRUCTURING IN JS</div>;
}

export default Destructuring;
