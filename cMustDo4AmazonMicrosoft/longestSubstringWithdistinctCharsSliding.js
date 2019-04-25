function solution(S) {
    let start = 0,
        end = 0,
        maxStr = '',
        obj = {};

    obj[S[0]] = 1;
    while (end < S.length) {
        let duplicateChars = Object.values(obj).filter(e => e > 1).length;

        if (duplicateChars) {
            obj[S[start]] -= 1;
            start++;
        } else {
            if (end - start + 1 > maxStr.length) maxStr = S.slice(start, end + 1);
            end++;
            obj[S[end]] = ++obj[S[end]] || 1;
        }
    }
    return maxStr;
}

console.log(solution('geeksforgeeksb'));