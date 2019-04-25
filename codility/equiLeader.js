function solution(A) {
    let obj = {}, arr = [], len = A.length;
    let leaderCount = 0;

    for (let a of A) obj[a] = ++obj[a] || 1;

    let maxKey = Object.keys(obj)
        .reduce((max, key) => obj[key] > obj[max] ? key : max);
    maxKey = parseInt(maxKey);

    for (let [i, a] of A.entries()) {
        if (a === maxKey) arr.push(i);
    }

    for (let i of arr) {
        if (checkEquiLeader(i) && i < len - 1) {
            console.log(i)
            leaderCount++;
        }
    }

    return leaderCount;

    function checkEquiLeader(i) {
        let leftCount, rightCount;
        leftCount = arr.filter(n => n <= i).length;
        rightCount = arr.filter(n => n > i).length;

        return ((leftCount / (i + 1)) > .5 && (rightCount / (len - i - 1)) > .5)
    }
}

let A = [4, 4, 2, 5, 3, 4, 4, 4];
console.log(solution(A));