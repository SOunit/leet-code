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
var mergeTwoLists = function (list1, list2) {};

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
