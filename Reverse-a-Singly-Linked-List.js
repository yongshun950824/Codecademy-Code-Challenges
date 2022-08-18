const Node = require('./Node.js');
const makeLinkedList = require('./makeLinkedList.js');

function reverseLinkedList(linkedList){
  // Write your code here
  if (linkedList == null
    || linkedList.next == null)
      return linkedList;

  var temp = reverseLinkedList(linkedList.next);
  linkedList.next.next = linkedList;
  linkedList.next = null;

  return temp;
}

//Calling your function on an example
console.log("Original")
let exampleLinkedList = makeLinkedList([4, 8, 15])
exampleLinkedList.print()
console.log("Reversed")
let reversed = reverseLinkedList(exampleLinkedList)
reversed.print()
// Leave this here so we can test your code
module.exports = reverseLinkedList;
