class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
    //this.head = {data,next:this.head}
  }

  removeFirst() {
    if (this.head) {
      let data = this.head.data;
      this.head = this.head.next;
      return data;
    } else return;
  }

  insertLast(data) {
    let node = getLast(),
      newNode = new Node(data); // newNode = {data,next:null}

    if (node) node.next = newNode;
    else this.head = newNode;
  }

  removeLast() {
    node = this.head;
    if (!node) return;
    if (!node.next) this.head = null;

    while (node.next.next) node = node.next;

    let data = node.next.data;
    node.next = null;
    return data;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) return;
    while (node.next) node = node.next;

    return node;
  }

  clear() {
    this.head = null;
  }

  size() {
    let node = this.head,
      count = 0;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getAt(index) {
    let node = this.head,
      i = 1;
    while (node && i < index) {
      node = node.next;
      i++;
    }
    return node;
  }

  removeAt(index) {
    let node = this.head,
      i = 1;
    while (node && i < index - 1) {
      node = node.next;
      i++;
    }
    if (node && node.next) {
      let data = node.next.data;
      node.next = node.next.next;
      return data;
    }
    return;
  }

  insertAt(index, data) {
    let node = this.head,
      i = 1;
    while (node && i < index - 1) {
      node = node.next;
      i++;
    }
    if (node) node.next = new Node(data, node.next);
    else this.head = new Node(data, this.head); //
  }

  forEach(fn) {
    let node = this.head,
      index = 1;
    while (node) {
      fn(node.data, index);
      node = node.next;
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node.data;
      node = node.next;
    }
  }

  reverse() {
    if (this.head === null) return null;
    if (this.head.next === null) return this.head;

    let prev = null, current = this.head;
    while (current) {
      let tmpNext = current.next;

      current.next = prev;

      prev = current;
      current = tmpNext;

    }
    this.head = prev;

  }


  swapConsequtive() {

    (function swap(node) {
      if (node === null || node.next === null) return;
      [[node.data], [node.next.data]] = [[node.next.data], [node.data]];
      swap(node.next.next);
    })(this.head);

  }


}
