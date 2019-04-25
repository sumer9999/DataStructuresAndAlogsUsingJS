let p1 = {};
p1.name = "DAKS";

const person = { name: "John Doe", email: "john@doe.com" };
Object.assign(person, {
  age: 27,
  [p1.name]: "Irish"
});

console.log(person);

const peopleArray = [
  { id: 123, name: "dave", age: 23 },
  { id: 456, name: "chris", age: 23 },
  { id: 789, name: "bob", age: 23 },
  { id: 101, name: "tom", age: 23 },
  { id: 102, name: "tim", age: 23 }
];

let arrayToObject = (array, key) =>
  array.reduce((accObject, item) => {
    accObject[item[key]] = item;
    return accObject;
  }, {});

let peopleObject = arrayToObject(peopleArray, "id");
//console.log(peopleObject[456]);

let selectedPerson = peopleArray.find(item => item.id === 123);
//console.log(selectedPerson);

let arrayToObject2 = (array, key) =>
  Object.assign({}, ...array.map(item => ({ [item[key]]: item })));

peopleObject2 = arrayToObject2(peopleArray, "id");
//console.log(peopleObject2[102]);
