//memoization in JS

//Memoization is an optimizattion technique that can be used to reduce time consuming
//calculations by saving prev input to something called cache and
// returning the result from it.

// let sum = 0;
// function calc(n) {
//   for (let i = 0; i <= n; i++) {
//     sum += i; // sum = sum+i
//   }
//   return sum;
// }

// function memoize(fun) {
//   let cache = {};
//   return function (...args) {
//     let n = args[0];
//     if (n in cache) {
//       return cache[n];
//     } else {
//       const result = fun(n);
//       cache[n] = result;
//       return result;
//     }
//   };
// }

// const efficient = memoize(calc);

// console.time();
// console.log(calc(5));
// console.timeEnd();

// console.time();
// console.log(efficient(5));
// console.timeEnd();

function fibo(n, prevValue = []) {
  if (prevValue[n] != null) {
    return prevValue[n];
  }
  let result;
  if (n <= 2) {
    result = 1;
  } else {
    result = fibo(n - 1) + fibo(n - 2);
  }
  prevValue[n] = result;
  return result;
}

console.log(fibo(100));
console.log(fibo(100));
