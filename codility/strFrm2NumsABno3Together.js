function strFrom2Nums(A, B) {
    let ratio; str = '';
    let wA = 'a', wB = 'b';
    if (B > A) [A, B, wA, wB] = [B, A, wB, wA];

    while (A > 0 && B > 0) {
        ratio = Math.ceil(A / B);
        if (ratio > 1) {
            A -= 2; B -= 1;
            str += `${wA}${wA}${wB}`;
        } else {
            A--; B--;
            str += `${wA}${wB}`;
        }
    }
    if (A) str += wA.repeat(A);
    return str;
}
console.log(strFrom2Nums(3, 3));