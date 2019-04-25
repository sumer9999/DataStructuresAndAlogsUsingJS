let movieObject = {
  name: "Good",
  length: 135,
  director: "Mr Great",
  rating: 4
};

function countStrings(object) {
  for (const key in object) {
    if (typeof object[key] === "string") {
      console.log(`${key}<-> ${object[key]}`);
    }
  }
}

countStrings(movieObject);
let arr = [];
