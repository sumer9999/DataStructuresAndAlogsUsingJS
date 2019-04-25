function solution(words) {
    let objS = {}, objE = {}, objM = {}, max = 0;
    const regex = (obj, c, word, pat, m) => {
        let match = word.match(new RegExp(pat));
        if (match) {
            if (m) obj[c] = match[1].length + (obj[c] || 0);
            else obj[c] = Math.max(match[1].length, (obj[c] || 0));
        }
    }
    for (let c of [...'abcdefghijklmnopqrstuvwxyz']) {
        for (word of words) {
            let initialS = objS[c];
            regex(objS, c, word, `^(${c}+)[^${c}]`);
            regex(objM, c, word, `^(${c}+)$`, 1);
            if (initialS === objS[c])
                regex(objE, c, word, `[^${c}](${c}+)$`);
        }
    }
    for (let c of [...'abcdefghijklmnopqrstuvwxyz'])
        max = Math.max(max, ((objS[c] || 0) + (objM[c] || 0) + (objE[c] || 0)));
    return max;
}
solution(['dd', 'bb', 'dd'])

    //  ['aabb', 'aaaa', 'bbab']  result = 6
    // ["xxbxx", "xbx", "x"]  result = 4
    //['dd', 'bb', 'cc', 'dd'] result = 4