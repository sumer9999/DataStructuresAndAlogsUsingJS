function factCache() {
    let cache = {};
    return function fact(N) {
        let result = 1;
        if (N in cache) {
            console.log('Got From Cache');
            return cache[N];
        }

        for (let i = 2; i <= N; i++) result *= i;

        console.log('Calculated ...');
        cache[N] = result;
        return result;
    }

    //return fact;
}
let fact = factCache();

console.log(fact(5));
console.log(fact(5));
console.log(fact(5));