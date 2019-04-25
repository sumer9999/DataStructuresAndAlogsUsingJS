class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    return this;
  }
  remove() {
    return this.data.shift();
  }

  isEmpty() {
    return this.data.length === 0;
  }

  front() {
    return this.data[0];
  }

  printQueue(sep = "<>") {
    return this.data.reduce(
      (str, item, i) => (str += i !== this.data.length - 1 ? item + sep : item),
      ""
    );
  }

  get length() {
    return this.data.length;
  }

  toString() {
    //console.log("Printing the Data", this.data);
    return this.printQueue();
  }
}

const queue1 = new Queue();
queue1
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5);

const queue2 = new Queue();
console.log(typeof queue2.front());
// queue2
//   .add("One")
//   .add("Two")
//   .add("Three");

//console.log(queue1.length);
//console.log(queue1.printQueue(":"));

// function weave(queue1, queue2) {
//   let queue3 = new Queue();
//   while (queue1.front() || queue2.front()) {
//     if (queue1.front()) queue3.add(queue1.remove());
//     if (queue2.front()) queue3.add(queue2.remove());
//   }
//   return queue3;
// }

// let queue3 = weave(queue1, queue2);

// console.log(queue3 + "");
