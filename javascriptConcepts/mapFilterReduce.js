//map, filter & reduce

// map() ? create a new array from existing one by applying fuction on each element of that array

const nums = [1, 2, 3, 4, 5];
//map method takes 3 paramscurrent element, index, existing array

// const multiplyThree = nums.map((num, i, arr) => {
//   return num * 3;
// });

// console.log(multiplyThree);
// console.log(nums);

//filter() method takes each element in an array and applies conditions

// const moreThanTwo = nums.filter((num, i, arr) => {
//   return num > 2;
// });

// console.log(moreThanTwo);

//reduce() - reduces array  down to just one value
// accumulator is where prev calc is stored
// in case of no prev calc present, acc stores first element
// const reducing = nums.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// console.log(reducing);
