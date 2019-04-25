let str = "This is a cruel cruel world dddd!!!";
function strConvert(str) {
    let strObj = [...str.trim().toLowerCase()].reduce((accObj, char) => {
        if (char.search('[a-z]') > -1) {
            accObj[char] = (accObj[char] || 0) + 1;
        }
        return accObj;
    }, {});
    return strObj;
}

function findMax(strObj) {
    let maxKey = Object.keys(strObj).reduce((maxKey, key) => {
        if (strObj[key] > strObj[maxKey]) maxKey = key;
        return maxKey;
    });
    return maxKey;
}

let strObj = strConvert(str);
let maxKey = findMax(strObj);
console.log(maxKey, strObj[maxKey]);