function QuestionsMarks(str) {
    let prevNum = 0, qCount;
    for (let c of [...str]) {
        let num = parseInt(c);
        if (!Number.isNaN(num)) {
            if (prevNum && num + prevNum === 10 && qCount === 3) {
                return true
            }
            prevNum = num;
            qCount = 0;


        } else if (c === '?') {
            qCount++;
        }
        return false;
    }

    // code goes here  
    //return str; 

}

// keep this function call here 
console.log(QuestionsMarks("acc?7??sss?3rr1??????5"));


//Object.keys(sObj).reduce( (ac, k, i) => !i || +object[k] < +object[ac] ? k : ac, undefined);
