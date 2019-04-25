function List() {
  this.listSize = 0;
  this.dataStore = [];

  this.append = append;
  this.clear = clear;
  this.length = length;
  this.toString = objToString;
}

function append(element) {
  this.dataStore[this.listSize++] = element;
}

function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0;
}

function length() {
  return this.listSize;
}

function objToString() {
  let nameString = "";
  this.dataStore.forEach(element => {
    nameString += ">>" + element.name + "  ";
  });
  return nameString;
}

names = new List();
names.append({ name: "Sumer", age: 21 });
names.append({ name: "Vikas", age: 31 });

console.dir(names);
console.log(names.length());
console.log(names.toString());

names.clear();
console.log("object");
console.log(names.toString());
