/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let pointNode = head;
    let count = 1;

    while(pointNode.next !== null) {
        pointNode = pointNode.next;
        count++;
    }

    let startNode = null;
    let resultNode = null;
    let index = 0;
    let targetIndex = count - n + 1;
    pointNode = head;

    while(pointNode !== null) {
        index++;
        if (index !== targetIndex) {
            const node = new ListNode();
            node.val = pointNode.val;

            if (!resultNode) {
                resultNode = node;
                startNode = resultNode;
            } else {
                resultNode.next = node;
                resultNode = resultNode.next;
            }
        }
        pointNode = pointNode.next;
    }

    return startNode;
};