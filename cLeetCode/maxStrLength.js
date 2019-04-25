function lengthOfLongestSubstring(s) {
    let maxLen = 0, tempMaxStr = '', maxStr = '', posIndex;

    for (let char of [...s]) {
        posIndex = tempMaxStr.indexOf(char);
        if (posIndex > -1) {
            tempMaxStr = tempMaxStr.substring(posIndex + 1);
        }

        tempMaxStr += char;

        maxStr = tempMaxStr.length > maxStr.length ? tempMaxStr : maxStr;
        //maxLen = Math.max(maxLen, maxStr.length);
    }
    return maxStr.length;
};

let len = lengthOfLongestSubstring('SUMSERASSS');
console.log(len);