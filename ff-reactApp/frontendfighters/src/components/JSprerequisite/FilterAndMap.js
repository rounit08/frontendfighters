import React from "react";

function FilterAndMap() {
  //map function will iterate over an array without using a loop
  //map will return a new array rather than manipulating the original one
  let arr = [1, 2, 3, 4, 5];
  //without map
  for (let i = 1; i <= arr.length; i++) {
    // console.log(i * 2);
  }
  //this will return 2,4,6,8,10

  //with map
  //   console.log(arr.map((nums) => nums * 2));
  //this will return 2,4,6,8,10
  //tipSip: map function takes two args, value & index

  //FILTER FUNCTION
  //as word suggests it will filter out the values on logic written in function
  //only those elems will be in o/p which will pass the criteria

  let fruits = [
    "apple",
    "banana",
    "karmKaFal",
    "guava",
    "melon",
    "kiwi",
    "lychee",
    "mango",
  ];
  let inBasket = [];

  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if (fruit.length > 6) {
      inBasket.push(fruit);
    }
  }
  console.log(fruits); //whole array

  console.log(inBasket); //karamKaFal comes in JHOLI ><
  return <div>FilterAndMap</div>;
}

export default FilterAndMap;
