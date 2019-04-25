let people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

// let {
//   name: n,
//   family: { father: f }
// } = people[0];
// console.log(n, f);

for ({
  name: n,
  family: { father: f }
} of people) {
  console.log(n, f);
}
