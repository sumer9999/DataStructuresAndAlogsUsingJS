/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num1 = 0, num2 = 0, num3 = 0, num3Copy, tempNum = 0, carry = 0;
    while (l1 || l2) {
        tempNum = 0; //reset carry
        if (l1) {
            //num1 = num1 * 10 + l1.val;
            tempNum = l1.val;
            l1 = l1.next;
        }
        if (l2) {
            //num2 = num2 * 10 + l2.val;
            tempNum += l2.val;
            l2 = l2.next;
        }

        tempNum22 = tempNum % 10;

        num3 = num3 * 10 + (tempNum22 + carry);
        carry = parseInt(tempNum / 10);
    }


    num3 = parseInt(num1.toString().split('').reverse('').join('')) + parseInt(num2.toString().split('').reverse('').join(''));
    num3Copy = num3;
    console.log(num1, num2, num3);
    let l3 = new ListNode(0), tempL3 = l3;
    while (num3) {
        tempL3.next = new ListNode(num3 % 10);
        tempL3 = tempL3.next;

        num3 = Math.floor(num3 / 10);
    }

    if (num3Copy === 0) return new ListNode(0);
    return l3.next;

};