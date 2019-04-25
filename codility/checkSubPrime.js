function solution(N, P, Q) {
    let output = [];

    let pArr = Array(N + 1).fill(0);
    let i = 2;
    while (i * i <= N) {    //N here is the max number, Create Array of Prime nums having 
        if (pArr[i] === 0) {
            for (let k = i * i; k <= N; k += i)
                pArr[k] = i;
        }
        i++;
    }                     //pArr 0 means no is prime and value means its divisile by prime no
    console.log(pArr);

    let semiArr = Array(N + 1).fill(0);

    for (let num = 1, sum = 0; num <= N; num++) { //semiArr, Assign Total sub primes till a num N
        if (pArr[num] && pArr[num / pArr[num]] === 0) { //check for non-prime, no itself should be non prime
            //let b = num / pArr[num];   // no should be divisiple by a prime no;
            //if (pArr[b] == 0) {    //result of division should also be a prime now
            sum++;
            //}
        }
        semiArr[num] = sum;
    }
    console.log(semiArr);

    for (let i = 0; i < P.length; i++) {  //Each element of P and Q(find between P-1 and Q and subtract)
        output.push(semiArr[Q[i]] - semiArr[P[i] - 1]);
    }

    return output;
}

console.log(solution(26, [1, 4, 16], [26, 10, 20]));