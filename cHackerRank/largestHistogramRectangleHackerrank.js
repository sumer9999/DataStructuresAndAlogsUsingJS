function largestRectangle(histArr) {
    let hStack = [], pStack = [], maxSize = 0, prevMaxPos, curPos;
    for (let [i, curHieght] of histArr.entries()) {
        curPos = i + 1;
        if (!hStack.length || curHieght > hStack[hStack.length - 1]) {
            hStack.push(curHieght); pStack.push(curPos);
        }
        else if (curHieght < hStack[hStack.length - 1]) {  //prevMaxPos is the height of first histogram bigger than current one
            while (hStack.length && curHieght < hStack[hStack.length - 1]) {  //prevMaxPos contains the current histo so is the starting point
                prevMaxPos = pStack.pop();
                maxSize = Math.max(maxSize, (curPos - prevMaxPos) * hStack.pop());
            }
            hStack.push(curHieght); pStack.push(prevMaxPos);
        }
    }

    while (hStack.length) {
        let curPos = histArr.length + 1;
        maxSize = Math.max(maxSize, (curPos - pStack.pop()) * hStack.pop());
    }
    return maxSize;
}

console.log(largestRectangle([1, 8, 6, 2, 5, 4, 8, 3, 7]));  //[10, 60, 43, 10, 10]


