//======understanding the concept======
// The flat() method creates a new array with all sub-array
// elements concatenated into it recursively up to the specified depth.

const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
//  output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(2));
//  output: Array [0, 1, 2, Array [3, 4]]
// console.log(arr2.flat(3));
//  output: Array [0, 1, 2, 3, 4]

const arr = [1, 2, 3, [4, [5, [6, [7, [8, [9, [10]]]]]]]];
//          -------------2---3-------4---
// console.log(arr.flat(7));

//question 3, BFE.dev
// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

// const arr = [1, [2], [3, [4]]];

// flat(arr)
// // [1, 2, 3, [4]]

// flat(arr, 1)
// // [1, 2, 3, [4]]

// flat(arr, 2)
// // [1, 2, 3, 4]

//building logic

function flat(arr, depth = 1) {
  const stack = arr.map((item) => [item, depth]);
  const res = [];

  while (stack.length > 0) {
    const [item, itemDepth] = stack.pop();
    if (Array.isArray(item) && itemDepth > 0) {
      stack.push(...item.map((i) => [i, itemDepth - 1]));
    } else {
      res.push(item);
    }
  }

  return res.reverse();
}
