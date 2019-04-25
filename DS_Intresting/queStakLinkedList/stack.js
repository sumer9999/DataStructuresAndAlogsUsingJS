class Stack {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.push(item);
    return this;
  }

  remove() {
    return this.data.pop();
  }

  top() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return this.data.length === 0;
  }

  toString(sep = " >< ") {
    return this.data.join(sep);
  }
}

let stack1 = new Stack();

stack1
  .add(1)
  .add(2)
  .add(3)
  .add(4);

// console.log(stack1 + "");

class queueAsStack {
  constructor(stack1) {
    this.stack1 = stack1;
    this.stack2 = new Stack();
  }

  add(item) {
    this.stack1.add(item);
  }

  remove() {
    while (this.stack1.top()) {
      this.stack2.add(this.stack1.remove());
    }
    let retItem = this.stack2.remove();

    while (this.stack2.top()) {
      this.stack1.add(this.stack2.remove());
    }

    return retItem;
  }

  isEmpty() {
    return typeof this.stack1.top() === "undefined";
  }

  front() {
    while (this.stack1.top()) {
      this.stack2.add(stack1.remove());
    }
    let retItem = this.stack2.top();

    while (this.stack2.top()) {
      this.stack1.add(this.stack2.remove());
    }

    return retItem;
  }

  printQueue() {
    return this.stack1.toString();
  }
}

let qAs = new queueAsStack(stack1);
qAs.remove();

// console.log(qAs.isEmpty());
console.log(qAs.printQueue());
console.log(qAs.front());
