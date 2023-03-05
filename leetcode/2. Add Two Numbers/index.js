/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let output = null;
  let temp = null;
  let carry = 0;

  while(l1 || l2 || carry ) {
      const sum = carry + (l1?.val || 0) + (l2?.val || 0);
      const val = sum >= 10 ? sum - 10 : sum;
      carry = sum >= 10 ? 1 : 0; 
      
      if(output === null) {
          output = new ListNode(val);
          temp = output;
      } else {
          const node = new ListNode(val);
          temp.next = node;
          temp = node;
      }

      if(l1) l1 = l1.next;
      if(l2) l2 = l2.next;
  }
  return output;
};