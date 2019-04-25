function solution2(H) { //Good Solution
    let hStack = [], block = 0, i = 0;
    while (i < H.length) {
        var curH = H[i];
        if (!hStack.length || curH > hStack[hStack.length - 1]) {
            i++;
            hStack.push(curH);
        } else if (hStack[hStack.length - 1] === curH) {
            i++;
        } else { //hStack Top is greater than CurHeight
            hStack.pop();
            block++;
        }
    }
    return block + hStack.length;
}
console.log(solution5([8, 8, 5, 7, 9, 8, 7, 4, 8]));



function solution1(H) {
    let hStack = [], i = 0, blocks = 0, curHeight, stackTop;
    while (i < H.length) {
        curHeight = H[i];
        stackTop = hStack[hStack.length - 1];
        if (!hStack.length || curHeight > stackTop) {
            hStack.push(curHeight);
        } else if (curHeight < stackTop) {
            blocks++;
            hStack.pop();
            i--;
        }
        i++;
    }
    return blocks + hStack.length;
}



//NOT GOOD< orgiginal
function solution3(H) {
    let stack = [], head = -1, block = 0, i = 0;
    while (i < H.length) {
        var curH = H[i];
        if (head < 0 || stack[head] < curH) {
            i++;
            stack.push(curH);//stack push
        } else if (stack[head] == curH) {
            ++i;
        } else { //stack[head] > h ,stack pop
            stack.pop();
            block++;
        }
    }
    return block + stack.length + 1
}
