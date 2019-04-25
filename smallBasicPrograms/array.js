mularr = [
  [1, 3, 5, 7],
  [56, 23, 78, 21],
  [63],
  200,
  [57, 98, 12, 45, 67, 32, 45],
  [1, 2, 3, 4, 5, 6, 6]
];
//console.log(mularr);

let outerTotal = 0;
let outerCount = 0;

for (row of mularr) {
  //console.log(row);
  let total = 0,
    average = 0;
  count = 0;
  if (Array.isArray(row)) {
    count = row.length;
    for (ele of row) {
      total += ele;
      console.log(ele);
    }
  } else {
    total = row;
    count = 1;
  }
  outerCount += count;
  outerTotal += total;

  console.log("\n Total", total);
  console.log(" elements count ", count);
  console.log("Average for each was", (total / count).toFixed(1));
}

console.log("\n\nOuter Average is", (outerTotal / outerCount).toFixed(1));
// users = [
//   { name: "s", age: 99 },
//   { name: "Su", age: 2 },
//   { name: "Sum", age: 19 },
//   { name: "Sumer", age: 5 },
//   { name: "Sumera", age: 2 }
// ];

// users.sort((user1, user2) => {
//   if (user1.age > user2.age) {
//     return 1;
//   }
// });

// console.log(users);
// let string = "This is a string of medium  length";

// let arr = string.split(/\s+/);
// console.log(arr.join(" "));
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let word of arr) {
//   console.log(word);
// }

// let arr = [10, 14, 12, 67, 89];

// let result = arr.every(num => num % 2 == 0);

// arr.forEach(num => {
//   if (num > 12) {
//     console.log(num);
//   }
// });

//console.log(result);
