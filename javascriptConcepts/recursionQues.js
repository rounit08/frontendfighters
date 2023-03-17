//ques1- print linearly from 1 to N
let count = 1;
function funky(n) {
  if (count === n) {
    return;
  } else {
    console.log(count);
    count++;
    funky(n);
  }
}

//recursion = any function which calls itself

//ques2- print name n number of  times
var name = "rounit";
let cnt = 0;
function printName(n) {
  if (cnt === n) {
    return;
  } else {
    console.log(name);
    cnt++;

    printName(n);
  }
}
