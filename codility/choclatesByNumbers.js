function solution(N, M) {   //Better solution
    if (M === 1) return N;

    return N / gcd(N, M);

    function gcd(a, b) {
        if (a === 0) return b;
        if (b === 0) return a;
        if (a === b) return a; //or b as same

        return (a > b) ? gcd(a - b, b) : gcd(a, b - a);
    }
}


function solution(N, M) { // NOT EFICIENT

    if (M === 1) return N;


    let count = 0;
    let arr = Array(N).fill(true);
    let current = 0;
    while (1) { // false Choc or 
        if (arr[current] === false) break;

        count++;
        arr[current] = false;
        if (current + M >= N) {
            current = (current + M) % N;
        } else {
            current = current + M;
        }

    }
    return count;
}

console.log(solution(10, 4));