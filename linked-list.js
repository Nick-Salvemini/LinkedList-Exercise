/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.length++;

    this.tail = newNode;

    return undefined;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return undefined;
  }

  /** pop(): return & remove last item. */

  pop() {
    // If the list is empty, return undefined
    if (this.head === null) {
      throw new Error('List is empty')
    }

    // if the list only has one item
    if (this.head === this.tail) {
      let val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }

    // If the list has more than one item
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    // If the list is empty, return undefined
    if (this.head === null) {
      throw new Error('List is empty')
    }

    // If the list has one or more items
    let removedVal = this.head.val;
    this.head = this.head.next;
    this.length--;

    // If the list is now empty, unassign the tail
    if (this.length === 0) {
      this.tail = null;
    }

    return removedVal;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // If index is out of bounds, throw error
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is out of bounds')
    }

    let current = this.head;
    let count = 0;

    while (count < idx) {
      current = current.next;
      count++;
    }

    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // If the list is empty, throw error
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is out of bounds')
    }

    let current = this.head;
    let count = 0;

    while (count < idx) {
      current = current.next;
      count++;
    }

    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // If index is out of bounds, throw error
    if (idx < 0 || idx > this.length) {
      throw new Error('Index is out of bounds')
    }

    //inserting at the beginning
    if (idx === 0) {
      return this.unshift(val)
    }

    //inserting at the end
    if (idx === this.length) {
      return this.push(val)
    }

    let newNode = new Node(val);

    let current = this.head;
    let count = 0;

    while (count < idx - 1) {
      current = current.next;
      count++;
    }

    newNode.next = current.next;
    current.next = newNode;

    this.length++;

    return undefined;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // If index is out of bounds, throw error
    if (idx < 0 || idx >= this.length) {
      throw new Error('Index is out of bounds')
    }

    // If removing first item
    if (idx === 0) {
      return this.shift()
    }

    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }

    let removedVal = current.next.val;

    current.next = current.next.next

    // if removing the last item, update tail
    if (idx === this.length - 1) {
      this.tail = current;
    }

    this.length--;

    return undefined;
  }

  /** average(): return an average of all values in the list */

  average() {
    // If the list is empty, return 0
    if (this.head === null) {
      return 0
    }

    let sum = 0;
    let count = 0;
    let current = this.head;

    while (current !== null) {
      sum += current.val;
      count++;
      current = current.next;
    }

    return sum / count;
  }
}

module.exports = LinkedList;
