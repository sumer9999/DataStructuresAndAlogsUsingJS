function sumOfNum(arr, sum) {  //Find a sum from single array
    let obj = {};
    for (let [i, n] of arr.entries()) {
        if (obj[n]) return [obj[n], i];
        else obj[sum - n] = i;
    }
    return -1;
}

arr1 = [2, 4, 1, 5, 6, 9, 10];
// console.log(sumOfNum(arr1, 16));
arr2 = [1, 5, 2, 8, 4, 9, 6];
console.log(sumOfNum44(arr1, arr2, 10));

function sumOfNum33(arr1, arr2, sum) { // EFFICIENT,find sum pairs using two array, pick element from each
    let results = [], obj = {};
    for (let a1 of arr1) {
        if (!obj[sum - a1])  //ensure no duplicates(1,9 and 9,1)
            obj[a1] = 1;
    }
    console.log(obj);
    for (let a2 of arr2) {
        if ((sum - a2) in obj) {
            results.push([sum - a2, a2]);
        }
    }
    return results;
}



function sumOfNum22(arr1, arr2, sum) { //NON EFFICIENT,find sum pairs using two array, pick element from each
    let results = [], obj = {};
    for (let a1 of arr1) {
        for (let a2 of arr2) {
            if ((a1 + a2) === sum && !(a1 in obj) && !(a2 in obj)) {
                results.push([a1, a2]);
                obj[a1] = 1;
                break;
            }

        }

    }
    return results;

}


function sumOfNum44(A1, A2, sum) {  //Checking if I can code
    let obj = {}, results = [];
    for (let a1 of A1)
        if (!obj[a1])
            obj[sum - a1] = a1

    for (let a2 of A2)
        if (obj[a2])
            results.push([obj[a2], a2])

    return results;
}