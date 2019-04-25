function EightQueens(queens) {
    const map = new Map();
    const isOk = ([r, c]) => r <= 8 && r >= 1 && c <= 8 && c >= 1;
    const setV = ([r, c], n) => {
        if (isOk([r, c])) {
            let jsfy = JSON.stringify([r, c]);
            if (map.has(jsfy) && !map.get(jsfy).includes(n)) map.set(jsfy, [...map.get(jsfy), n]);
            else map.set(jsfy, [n]);
        }
    }

    for ([index, queen] of queens.entries()) {
        let [r, c] = queen.match(/(\d)/g).map(n => parseInt(n))
        for (let i = 1; i <= 8; i++) {
            setV([r, i], index + 1);
            setV([i, c], index + 1);
            setV([r + i, c + i], index + 1);
            setV([r - i, c - i], index + 1);
            setV([r + i, c - i], index + 1);
            setV([r - i, c + i], index + 1);
        }
    }
    for (queen of queens) {
        let [r, c] = queen.match(/(\d)/g).map(n => parseInt(n));
        if (map.get(JSON.stringify([r, c])).length > 1) return queens[map.get(JSON.stringify([r, c]))[0] - 1];
    }
    return true;
}

console.log(EightQueens(["(2,1)", "(5,3)", "(6,3)", "(8,4)", "(3,4)", "(1,8)", "(7,7)", "(5,8)"]));