/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let preHead = new ListNode(-1);
  let prev = preHead;

  while (list1 !== null && list2 !== null) {
    console.log(list1, list2);
    // list1: [1,2,3]
    // list2: [1,3,4]
    if (list1.val <= list2.val) {
      prev.next = list1;

      // increment
      list1 = list1.next;
    } else {
      prev.next = list2;

      // increment
      list2 = list2.next;
    }

    prev = prev.next;
  }

  // add last item
  prev.next = list1 === null ? list2 : list1;

  return preHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1_3 = new ListNode(3);
const node1_2 = new ListNode(2, node1_3);
const node1_1 = new ListNode(1, node1_2);

const node2_3 = new ListNode(3);
const node2_2 = new ListNode(2, node2_3);
const node2_1 = new ListNode(1, node2_2);

console.log(mergeTwoLists(node1_1, node2_1));
