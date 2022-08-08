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

const node5 = ListNode(1);
const node4 = ListNode(1, node5);
const node3 = ListNode(1, node4);
const node2 = ListNode(2, node3);
const node1 = ListNode(1, node2);

mergeTwoLists(node1, node1);
