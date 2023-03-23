const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3)); // '1_2_3'
console.log(curriedJoin(1)(2, 3)); // '1_2_3'
console.log(curriedJoin(1, 2)(3)); // '1_2_3'

function curry(fn) {
  // so here we are taking all the args of function fn using rest operator
  // all the args comes in an array
  return function curried(...args) {
    //now we see in line 7,8,9 = 3args passed, 2 args passed respectively(lines)
    //but we see in line 1 join takes 3args
    //so we are comparing that is args.length is greater or equals the length fn accepting

    if (args.length >= fn.length) {
      //if the length is same we consider this line 23 which is using the apply method
      // as we know that in apply method args is passed as array and we are doing the same(see line 13 ><)
      //here this is denoting the function fn and this, args means args of fn.
      return fn.apply(this, args);
    } else {
      // and suppose the length is not same, length is different ( see line 8 & 9)
      // bind returns afunction so here it appends the args to the fn itself
      //here 'this' keyword represents function fn
      return curried.bind(this, ...args);
    }
  };
}
