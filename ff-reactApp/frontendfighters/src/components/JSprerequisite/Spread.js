import React from "react";

function Spread() {
  let arr = [1, 2, 3];
  let arr2 = arr;

  //   arr2.push(4); //we pushed 4 to arr2 ONLY

  //   console.log(arr2); //log 1234
  //   console.log(arr); //also logs 1234
  //Reason Below export line as R1

  //SPREAD OPERATOR

  let array = [1, 2, 3, 4];

  //   console.log(array); //logs [1,2,3,4] logging proper array
  //   console.log(...array); //logs 1,2,3,4 now array is spreaded means list of array elems

  //now

  let arry = [1, 2, 3, 4];
  let arry2 = [...arry];
  arry2.push(10);

  // console.log(arry); // logs 1,2,3,4
  // console.log(arry2);//logs 1,2,3,4,10

  //spread operator in Object

  let obj = {
    name: "Rounit",
    add: {
      country: "India",
      state: {
        code: "DL",
        pin: "111111",
      },
    },
  };

  // let obj2 = obj;
  // obj2.name = "sinha";
  // console.log(obj); //name sinha
  // console.log(obj2); //name sinha
  let obj2 = { ...obj };
  obj2.name = " sinha";
  console.log(obj); //name rounit
  console.log(obj2); //name sinha

  return <div>Spread Operator in JavaScript</div>;
}

export default Spread;

//R1 : there are two types of memory storage STACK and HEAP

// |        |  |        |
// |        |  |        |
// |        |  |[1,2,3] |
// |  arr   |  |        |
// |________|  |________|
//  stack        heap
// all the vars we declare goes to stack in this case it's "arr"
// array gets stored in heap, in this case it's [1,2,3]
//suppose array in heap is at some n position, so arr in stack will points that "n" position
//when we declared arr2= arr, then arr2 also points array at n position, no new array formed
//so when we pushed 4 in arr2 then array at n position in heap got a value 4
//now array becomes [1,2,3,4] as arr2 and arr both points to this array only, therefore both logged [1,2,3,4]
