function solution1(S, K) {
    let sms = 0, sArr = [];
    let arr = S.split(' ');
    if (arr.some(w => w.length > K)) return -1;
    while (arr.length > 0) {
        word = arr.shift();
        if ([...sArr, word].join(' ').length > K) {
            sArr = [word];
            sms++;
        } else {
            sArr = [...sArr, word];
        }
    }
    if (sArr.join('').trim().length) sms++;
    return sms;
}

console.log(solution('SMS messages are really short is', 12))
function solution(S, K) {
    let count = 0, sms = 0, sIndex;

    if (S.split(' ').some(w => w.length > K)) return -1;

    for (let i = 0; i <= S.length - 1; i++) { //console.log(i, S.charAt(i));
        if (S.charAt(i) === ' ') {
            sIndex = i;
        }

        count++;
        if (count === 12) {
            sms++;
            count = 0;
            if (S.charAt(i + 1) === ' ') {  //Add coditional check for last charcter
                i++;
                sIndex = i;
            }
            else {
                i = sIndex;
            }
        }
    }
    if (count) sms++;
    return sms;
}