/* eslint-disable strict */
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let previousNode = this.head;
      while (currNode !== null && currNode.value !== key) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      if (currNode.value === key) {
        previousNode.next = new _Node(item, currNode);
      }
    }
  }

  insertAfter(item, key) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let previousNode = this.head;
      while (currNode !== null && currNode.value !== key) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log("Item not found");
        return;
      }
      if (currNode.value === key) {
        let foundNode = currNode;
        let afterFoundNode = currNode.next;

        foundNode.next = new _Node(item, afterFoundNode);
      }
    }
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.insertFirst(item);
    } else {
      let currNode = this.head;
      let previousNode = this.head;

      for (let i = 1; i <= pos; i++) {
        previousNode = currNode;
        currNode = currNode.next;

        if (i === pos) {
          previousNode.next = new _Node(item, currNode);
        }
      }
    }
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

function display(list) {
  let currentNode = list.head;

  while (currentNode.next !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  if (currentNode) console.log(currentNode.value);
}

function size(list) {
  let currentNode = list.head;
  let counter = 0;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  console.log(counter);
}

function isEmpty(list) {
  if (list.head === null) {
    return true;
  } else {
    return;
  }
}

function findPrevious(list, item) {
  let currentNode = list.head;
  let previousNode = list.head;

  if (list.head === item) {
    return null;
  }

  while (currentNode.value !== item && currentNode.next !== null) {
    currentNode = currentNode.next;
    if (currentNode.value === item) {
      console.log(previousNode.value);
    }
    previousNode = currentNode;
  }
}

function findLast(list) {
  let currentNode = list.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  if (currentNode.next === null) {
    return currentNode;
  }
}

function mergeSort(linkedList) {
  if (isEmpty(linkedList) || linkedList.head.next == null) {
    return linkedList;
  }

  let left = new LinkedList();
  left.head = linkedList.head;  
  let leftPointer = linkedList.head;
  let dll = linkedList.head.next;

  while (dll != null && dll.next != null) {
    leftPointer = leftPointer.next;
    dll = dll.next.next;
  }

  let right = new LinkedList();

  right.head = leftPointer.next;
  leftPointer.next = null;

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, new LinkedList());
}

function merge(left, right, linkedList) {
  let leftNode = left.head;
  let rightNode = right.head;

  while (leftNode && rightNode) {
    if (leftNode.value < rightNode.value) {
      linkedList.insertLast(leftNode.value);
      leftNode = leftNode.next;
    } else {
      linkedList.insertLast(rightNode.value);
      rightNode = rightNode.next;
    }
  }
  while (leftNode) {
    linkedList.insertLast(leftNode.value);
    leftNode = leftNode.next;
  }
  
  while (rightNode) {
    linkedList.insertLast(rightNode.value);
    rightNode = rightNode.next;
  }

  return linkedList;
}

function main() {
  let numbersList = new LinkedList();

  const dataset = [89, 30, 25, 32, 72, 70, 51, 42]; // 25, 24, 53, 55, 78, 50, 13];
  for (let i = 0; i < dataset.length; i++) {
    numbersList.insertLast(dataset[i]);
  }
  // console.log(display(numbersList));
  // mergeSort(numbersList);
  console.log(display(mergeSort(numbersList)));
}

main();
