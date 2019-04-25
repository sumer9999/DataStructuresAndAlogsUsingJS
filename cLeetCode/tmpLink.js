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
    let l3 = new ListNode(null); let val3, carry = 0;
    let tr3 = l3;
    while (l1 || l2) {
        console.log(l1.val, l2.val);
        val3 = l1.val + l2.val
        l1 = l1.next;
        l2 = l2.next;

        if (tr3.val === null) tr3.val = val3;
        else tr3.next = new ListNode(val3)
        tr3 = tr3.next;

    }
    tr3.next = null;

    while (l3) {
        console.log("> ", l3.val)
        l3 = l3.next;
    }
};

/////////#################################################
var addTwoNumbers = function (l1, l2) {
    // create list head for trailing nodes
    const head = new ListNode(null);

    // define runner that computes current node and append to list
    const add = (node, n1, n2, carry = 0) => {
        // end condition
        if (!n1 && !n2 && !carry) {
            return null;
        }

        // add node for additional carrying
        if (!n1 && !n2 && carry) {
            return node.next = new ListNode(carry);
        }

        let currentValue = 0
        let currentCarry = 0

        // compute value for current node
        if (!n2) {
            currentValue = n1.val + carry;
        } else if (!n1) {
            currentValue = n2.val + carry;
        } else {
            currentValue = n1.val + n2.val + carry;
        }

        // determine whether there's a carry
        if (currentValue >= 10) {
            currentValue %= 10;
            currentCarry = 1;
        }

        // start recursion for the next nodes
        const nextN1 = n1 ? n1.next : null;
        const nextN2 = n2 ? n2.next : null;

        if (node.val === null) {
            node.val = currentValue;
            return add(node, nextN1, nextN2, currentCarry);
        } else {
            const newNode = new ListNode(currentValue);
            node.next = newNode;
            return add(newNode, nextN1, nextN2, currentCarry);
        }
    }

    // start runner
    add(head, l1, l2);

    return head;
};