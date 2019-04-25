//Sliding Window - findLongestSubstring

function createObject(S, obj = {}) {
    for (let s of S) (obj[s] = ++obj[s] || 1);
    return obj;
}
const findDist = S => Object.keys(createObject(S)).length;


function findLongestSubstring(S = '') {
    let distOfS = findDist(S), distC;
    let back = 0, front = 0, min = S.length;

    while (front < S.length) {
        distC = findDist(S.slice(back, front + 1));
        if (distC < distOfS) {
            front++;
        } else {
            min = Math.min(min, front - back + 1);
            back++
        }

    }
    return min;
}

console.log(findLongestSubstring('rithmrithmschoolrithm'))

