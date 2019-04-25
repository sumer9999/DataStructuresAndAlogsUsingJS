function rearrangePositiveNegative(A) {
    let positives = A.filter(a => a > 0);
    let negatives = A.filter(a => a < 0);
    let results = [];

    while (positives.length && negatives.length) {
        results.push(positives.pop(), negatives.pop());
    }
    while (positives.length) {
        results.push(positives.pop());
    }
    while (negatives.length) {
        results.push(negatives.pop());
    }


    return results;
}


function rearrangeOnly(arr) {  // Setup negative in starting and positives afer that
    let index = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            [arr[i], arr[index]] = [arr[index], arr[i]];
            index++;
        }
    }
    return [arr, index];
}

function mixUp(arr, pos) {   //Mix up one negative and opne positive until one of the list finishes
    neg = arr[0];
    while (pos < arr.length && arr[neg] < 0) {
        [arr[pos], arr[neg]] = [arr[neg], arr[pos]];
        pos += 2;
        neg++;
    }
    return arr;
}


let arr = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
// let [arrDone, pos] = rearrangeOnly(arr);
// console.log(arrDone, pos);
//console.log(mixUp(arrDone));

console.log(arr.sort())