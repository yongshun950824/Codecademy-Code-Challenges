const Node = require('./Node.js');
const makeLinkedList = require('./makeLinkedList.js');

function swapNodes(list, data1, data2) {  
  if (list == null)
    return list;

  if (data1 == data2)
    return list;

  var prevNode1 = null,
    node1 = list,
    prevNode2 = null,
    node2 = list;

  while (node1 != null && node1.data != data1) {
    prevNode1 = node1;
    node1 = node1.next;
  }

  while (node2 != null && node2.data != data2) {
    prevNode2 = node2;
    node2 = node2.next;
  }

  if (prevNode1 != null)
    prevNode1.next = node2;
  else
    list = node2;

  if (prevNode2 != null)
    prevNode2.next = node1;
  else
    list = node1;

  var temp = node1.next;
  node1.next = node2.next;
  node2.next = temp;

  return list;
}

let exampleList = makeLinkedList([1, 2, 3, 4, 5, 6])
let retList = swapNodes(exampleList, 2, 5)

// Leave this so we can test your code:
module.exports = swapNodes;
