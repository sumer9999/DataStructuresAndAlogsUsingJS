class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value)
        let current = this.root;
        if (current === null) {
            this.root = newNode;
            return this;
        }

        while (1) {
            if (value === current.value) return this;

            if (value < current.value) {
                if (current.left) current = current.left;
                else {
                    current.left = newNode;
                    break;
                }
            }
            else {
                if (current.right) current = current.right;
                else {
                    current.right = newNode;
                    break;
                }
            }
        }
        return this;
    }


    find(value) {
        let found = false,
            current = this.root;

        if (current === null) return false;

        while (current && !found) {
            if (value > current.value) current = current.right;
            else if (value < current.value) current = current.left;
            else found = true;
        }

        return found;
    }

    getLargest() {
        let current = this.root,
            largest;
        while (current.right) {
            current = current.right;
        }
        return current.value;
    }


    getSmallest() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }

    BFT() {
        //let current = this.root;
        let arr = [this.root];

        while (arr.length) {
            let current = arr.shift();
            if (current.left) arr.push(current.left);
            if (current.right) arr.push(current.right);
            console.log(current.value);
        }

    }

    DFTPreOrder(data = []) {
        function traverse(current) {
            data.push(current.value);
            if (current.left) traverse(current.left);
            if (current.right) traverse(current.right);
        }
        traverse(this.root);
        return data;
    }

    DFTInOrder(data = []) {
        (function traverse(current) {
            if (current.left) traverse(current.left);
            data.push(current.value);
            if (current.right) traverse(current.right);
        })(this.root);
        return data;
    }

    DFT_PRE() {  //PreOrder Withot Recursion
        let arr = [this.root];
        while (arr.length) {
            let current = arr.shift();

            if (current.right) arr.unshift(current.right);
            if (current.left) arr.unshift(current.left);

            console.log(current.value);
        }
    }

    DFT_IN() {  //PreOrder Withot Recursion WRONG, NEED TO CORRECT IT,
        let arr = [this.root];
        while (arr.length) {
            let current = arr.shift();

            if (current.right) arr.unshift(current.right);
            if (current.left) arr.unshift(current.left);

            console.log(current.value);
        }
    }
    getLevelArray() {
        let split = '-XX0000SPLIT0000XX-';
        let levelCount = [0];
        let arr = [this.root, split];

        while (arr.length > 1) {
            let current = arr.shift();

            if (current === split) {
                arr.push(split);
                levelCount.push(0);
            } else {
                levelCount[levelCount.length - 1]++;
                if (current.left) arr.push(current.left);
                if (current.right) arr.push(current.right);
            }
        }
        return levelCount;
    }

    getTreeArray() {
        let split = '-XX0000SPLIT0000XX-';
        let levelCount = [[]];
        let arr = [this.root, split];

        while (arr.length > 1) {
            let current = arr.shift();

            if (current === split) {
                arr.push(split);
                levelCount.push([]);
            } else {
                levelCount[levelCount.length - 1].push(current);
                if (current.left) arr.push(current.left);
                if (current.right) arr.push(current.right);
            }
        }
        return levelCount;
    }


    BFValidate() {

        let arr = [this.root];

        while (arr.length) {
            let current = arr.shift();
            if (current.left) {
                arr.push(current.left);
                if (current.value < current.left.value) return false;
            }
            if (current.right) {
                arr.push(current.right);
                if (current.value > current.right.value) return false;
            }
        }
        return true;
    }

    depthOfTree(current = this.root) { //Height of tree
        //const dp = cur => (cur == null) ? 0 : (Math.max(dp(cur.left), dp(cur.right)) + 1)
        function maxDepth(current) {
            if (current == null) return 0;
            else {
                let lDepth = maxDepth(current.left);
                let rDepth = maxDepth(current.right);

                return (Math.max(lDepth, rDepth) + 1);
            }
        }
        return maxDepth(this.root);
    }
}

let bst1 = new BST();
bst1.insert(4).insert(99).insert(2).insert(1).insert(3).insert(199).insert(1).insert(6);
console.dir(bst1);