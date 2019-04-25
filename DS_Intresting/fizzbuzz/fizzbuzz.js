let fizzbuzz = function(num) {
  fizz = num % 3 === 0 ? true : false;
  buzz = num % 5 === 0 ? true : false;

  if (fizz && buzz) {
    return "fizzbuzz";
  } else if (fizz) {
    return "fizz";
  } else if (buzz) {
    return "buzz";
  } else {
    return num;
  }
};

for (let i = 1; i < 101; i++) {
  console.log(fizzbuzz(i));
}

// let fizzbuzz = function(num) {
//   if (num % 3 === 0) {
//     if (num % 5 === 0) {
//       return "fizzbuzz";
//     } else {
//       return "fizz";
//     }
//   } else if (num % 5 === 0) {
//     if (num % 3 === 0) {
//       return "fizzbuzz";
//     } else {
//       return "Buzz";
//     }
//   } else {
//     return num;
//   }
// };
