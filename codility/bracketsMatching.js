function solution(S) { //Trying to refactor code little bit
    let cStack = [], brackets = '[{(';
    let obj = {
        ']': '[',
        '}': '{',
        ')': '('
    }

    if (S.length === 0) return 1

    for (let c of [...S]) {
        if (brackets.includes(c)) cStack.push(c);
        else {
            if (obj[c] !== cStack[cStack.length - 1]) return 0;
            cStack.pop();
        }
    }
    if (cStack.length) return 0;
    return 1;
}
console.log(solution("{[()()]}"));

function solution(S) {  //Older verified and working solution
    let cStack = [], brackets = '[{(';
    let obj = {
        ']': '[',
        '}': '{',
        ')': '('
    }

    if (S.length === 0) return 1

    for (let c of [...S]) {
        if (brackets.includes(c)) cStack.push(c);
        else {
            for (let closing of Object.keys(obj)) {
                if (c === closing && cStack[cStack.length - 1] !== obj[c]) return 0;
            }
            cStack.pop(c);
        }
    }
    if (cStack.length) return 0;
    return 1;
}