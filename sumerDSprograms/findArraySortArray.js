let courses = [
  { id: 1, name: "React Overloaded" },
  { id: 2, name: "A Nice Redux Thing" },
  { id: 3, name: "a Tale of ES6" },
  { id: 4, name: "Zest with JEST" }
];

let course = courses.find(course => course.id === 3);
console.log(course);

courses.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase());
console.log(courses);
