var longestPalindrome22 = function (s) {
    let len = s.length; let maxLen = 0, maxStr = "", count = 0;
    if (len <= 1) return s;
    for (let i = 0; i <= len - 1; i++) {
        for (let j = len - 1; j > i; j--) {
            count++;
            if (s.charAt(i) === s.charAt(j) && checkPalin(i, j)) {
                let palinStr = s.slice(i, j + 1);
                if (palinStr.length > maxLen) {
                    maxLen = palinStr.length;
                    maxStr = palinStr;
                }
            }
        }
    }
    console.log(count);
    if (maxStr) return maxStr;
    return s.charAt(0);

    function checkPalin(l, r) {
        let subs = s.slice(l, r + 1)
        return subs === [...subs].reverse().join('');
    }
};


var longestPalindrome = function (s, max = '') {
    for (var i = 0; i < s.length; i++) {
        for (var j = 0; j < 2; j++) {
            let left = i, right = i + j;
            while (s[left] && s[left] === s[right]) {
                left--; right++;
            } //loops breaks out just at left-1 and right+1 of palindrome
            if ((right - left - 1) > max.length) max = s.slice(left + 1, right);
        }
    }
    return max;
};


//let s = "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc";
let s = "abrarcaba"
console.log(longestPalindrome(s));