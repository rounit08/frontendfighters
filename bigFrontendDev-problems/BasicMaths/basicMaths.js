console.log("hello");

//count digits
//input: 1892 [.] output: 4
//input: 52   [.] output: 2

// function countDigits(num) {
//   let str = num.toString();
//   let count = 0;
//   for (let i = 1; i <= str.length; i++) {
//     count++;
//   }
//   return count;
// }

function countDigits(num) {
  let count = 0;
  while (num > 0) {
    count++;
    num = num / 10;
    // console.log(num);
  }
  return count;
}
let counting = countDigits(15);
// console.log(counting);

// function countDigits(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return Math.floor(Math.log10(Math.abs(n))) + 1;
// }

//reverse a nukmber

function reverseNumber(num) {
  return num.toString().split("").reverse().join("");
}

// console.log(reverseNumber(12045)); //54021

//check palindrome

function palindromeChecker(num) {
  let pali = num.toString().split("").reverse().join("");
  if (pali == num) {
    return "it is a palindrome";
  } else {
    return "it's not a palindrome";
  }
}

// console.log(palindromeChecker(850058)); //it is a palindrome

// armstrong number
// 371 => 3^3 + 7^3 + 1^3 = 371(number itself) is armstrong
//35 => 3^3 + 5^3 = 152 (not the number itself) not armstrong
function armstrong(num) {
  let number = num.toString();
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + Math.pow(parseInt(number.charAt(i)), 3);
  }

  if (sum == num) {
    return true;
  } else {
    return false;
  }
}

//armstrong number
// 371 => 3^3 + 7^3 + 1^3 = 371 - this is armstong
// 35 => 3^3 + 5^3 != 35 - not armstrong

const armstrongCheck = (num) => {
  let numString = num.toString();

  let length = numString.length;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += Math.pow(parseInt(numString.charAt(i)), 3);
  }
  return sum == num;
};

const optimisedArmstrong = (num) => {
  let sum = 0;
  let temp = num;
  const len = num.toString().length;

  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, len);
    temp = Math.floor(temp / 10);
  }

  return sum == num;
};

const allDivisors = (num) => {
  let divisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      divisors.push(i);
    }
  }
  return divisors;
};

const checkForPrim = (num) => {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return "is a prime number";
  } else {
    return "is not a prime number";
  }
};

// console.log(checkForPrim(17));

function findgcd(num1, num2) {
  let gcd = 1;
  let iteration = Math.min(num1, num2);
  for (let i = 1; i <= iteration; i++) {
    console.log("run");
    if (num1 % i == 0 && num2 % i == 0) {
      gcd = i;
    }
  }
  return gcd;
}

// console.log(findgcd(12, 9));
