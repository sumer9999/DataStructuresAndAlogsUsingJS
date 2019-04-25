function solution(N, A) {
    let counterMax = 0,
        limitMax = 0
    let counters = Array(N).fill(0);

    for (let a of A) {
        if (a > N) {
            limitMax = counterMax
        } else {
            counters[a - 1] = Math.max(limitMax, counters[a - 1]) + 1;
            counterMax = Math.max(counters[a - 1], counterMax);
        }
    }

    for (var l = 0; l < N; l++) {
        counters[l] = Math.max(counters[l], limitMax)
    }

    return counters;
}