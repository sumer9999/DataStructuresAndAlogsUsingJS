function solution(S) {
    let A = [...S],
        aObj = {};
    for (let i = 0; i < A.length; i++) {
        if (A[i] in aObj) {
            A.splice(i, 1);
            i--; //Because Now I already moved to next char and i++ in end of loop will
        }                   //will take it to next value and we will skip one value
        else {
            aObj[A[i]] = 1;
        }
    }
    return A.join('');
}

console.log(solution('geeksforgeeks'));