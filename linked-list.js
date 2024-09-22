import { Node } from './node.js';

class LinkedList {
  constructor() {
    this.listHead = null;
  }

  append(value) {
    if (this.listHead == null) {
      this.listHead = new Node(value);
    } else {
      let i = this.listHead;
      while (i.nextNode != null) {
        i = i.nextNode;
      }
      i.nextNode = new Node(value);
    }
  }

  prepend(value) {
    if (this.listHead == null) {
      this.listHead = new Node(value);
    } else {
      let tmp = this.listHead;
      this.listHead = new Node(value);
      this.listHead.nextNode = tmp;
    }
  }

  size() {
    if (this.listHead == null) {
      return 0;
    } else {
      let size = 1;
      let i = this.listHead;
      while (i.nextNode != null) {
        size += 1;
        i = i.nextNode;
      }
      return size;
    }
  }

  head() {
    if (this.listHead == null) {
      return 'The list is empty';
    }
    return this.listHead;
  }

  tail() {
    if (this.listHead == null) {
      return 'The list is empty';
    }
    let tail = this.listHead;
    while (tail.nextNode != null) {
      tail = tail.nextNode;
    }
    return tail;
  }

  at(index) {
    if (index < 0 || index > this.size() - 1) {
      return 'Invalid index';
    }
    let searchedNode = this.listHead;
    for (let i = 0; i < this.size(); i++) {
      if (i == index) {
        return searchedNode;
      }
      searchedNode = searchedNode.nextNode;
    }
  }

  pop() {
    if (this.listHead == null) {
      return 'The list is empty';
    }
    this.at(this.size() - 2).nextNode = null;
  }

  contains(value) {
    if (this.listHead == null) {
      return 'The list is empty';
    }
    let i = this.listHead;
    while (i != null) {
      if (i.value == value) {
        return true;
      }
      i = i.nextNode;
    }
    return false;
  }

  find(value) {
    for (let i = 0; i < this.size(); i++) {
      if (this.at(i).value == value) {
        return i;
      }
    }
    return null;
  }

  toString() {
    if (this.listHead == null) {
      return 'The list is empty';
    }
    let i = this.listHead;
    let list = '';
    while (i != null) {
      list += `(${i.value}) -> `;
      i = i.nextNode;
    }
    list += `null`;
    return list;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      return 'Invalid index';
    }
    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (index == this.size()) {
      this.append(value);
      return;
    }
    let newNode = new Node(value);
    let prevNode = this.at(index - 1);
    let postNode = this.at(index);
    prevNode.nextNode = newNode;
    newNode.nextNode = postNode;
  }

  remvoeAt(index) {
    if (index < 0 || index >= this.size()) {
      console.log('Invalid index');
      return;
    }
    if (index == 0) {
      this.listHead = this.listHead.nextNode;
      return;
    }
    if (index == this.size() - 1) {
      this.pop();
      return;
    }
    let prevNode = this.at(index - 1);
    let postNode = this.at(index + 1);
    prevNode.nextNode = postNode;
  }
}

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

console.log(list.toString());

list.remvoeAt(4);
console.log(list.toString());
