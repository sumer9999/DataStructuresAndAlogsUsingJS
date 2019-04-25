function maxChar(S) {
    let strObj = {}
    for (let c of [...S.toLowerCase()]) {
        strObj[c] = (strObj[c] || 0) + 1;
    }
    let maxKey = Object.keys(strObj).reduce((maxKey, c) => {
        //let check = c.search(/\w/);
        //if (c.search(/\w/) > -1) {
        return (strObj[maxKey] < strObj[c] && c.search(/\w/) > -1) ? c : maxKey;
        //}
        //else return maxKey;
    });
    return maxKey;
}


console.log(maxChar('I m going under 111Ddddddddrowing for you,,,,,,,,,,'));