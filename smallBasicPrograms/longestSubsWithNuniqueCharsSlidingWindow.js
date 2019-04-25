//Below program search for longest string with n Unique chars
function longestSubs(S, n) {
    let start = 0,
        end = 0,
        obj = {},
        maxStr = '';

    obj[S[0]] = 1;

    while (end <= S.length - 1) {
        let distChars = Object.values(obj).filter(e => e > 0).length;
        if (distChars > n) {
            obj[S[start]] = obj[S[start]] - 1;
            start++;
        } else {
            if ((distChars === n) && ((end - start + 1) > maxStr.length)) {
                maxStr = S.slice(start, end + 1);
            }
            end++;
            obj[S[end]] = (obj[S[end]] || 0) + 1;
        }

    }
    return maxStr;
}

//Below program search for smallest string with n chars
function smallestSubs(S, n) {
    let start = 0, end = 0, obj = {}, minStr = S;
    obj[S[0]] = 1;

    while (end <= S.length - 1) {
        let distChars = Object.values(obj).filter(e => e > 0).length;
        if (distChars > n) {
            obj[S[start]] -= 1;
            start++;
        } else {
            while (distChars === n && (obj[S[start]] > 1)) {
                obj[S[start]] -= 1;
                start++;
                distChars = Object.values(obj).filter(e => e > 0).length;
                if ((end - start + 1) < minStr.length) {
                    minStr = S.slice(start, end + 1);
                }
            }
            end++;
            obj[S[end]] = ++obj[S[end]] || 1
        }
    }
    return minStr;
}
// console.log(longestSubs('karappa', 2)); 
// console.log(smallestSubs("efecfefd", 4))
// console.log(smallestSubs("ababcb", 3))

//Below code searches for all chars of a string(min length) into another bigger string
function smallest(S, subs) {
    let start = 0, end = 0, obj = {}, minStr = S;
    obj[S[0]] = 1;
    objSubs = createObject(subs);
    while (end <= S.length - 1) {
        if (isSubs(obj, objSubs)) {
            while (isSubs(obj, objSubs)) {
                if ((end - start + 1) < minStr.length) {
                    minStr = S.slice(start, end + 1);
                }
                obj[S[start]] -= 1;
                start++;
            }
        } else {
            end++;
            obj[S[end]] = ++obj[S[end]] || 1
        }
    }
    return minStr;
}


console.log(smallest('adobecodebancc', 'abc'));

function createObject(S) {
    let obj = {};
    for (let s of S) {
        obj[s] = ++obj[s] || 1;
    }
    return obj;
}

function isSubs(obj, objSubs) {
    for (let key in objSubs) {
        if ((!obj[key]) || (obj[key] < objSubs[key])) return false;
    }
    return true;
}