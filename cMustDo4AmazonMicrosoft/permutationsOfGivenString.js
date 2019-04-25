function permuteOLD(A, l = 0) { //Good and working solution
    if (l === A.length - 1)
        console.log(A);
    else {
        for (let i = l; i <= A.length - 1; i++) {
            [A[l], A[i]] = [A[i], A[l]];
            permute(A, l + 1);
            [A[i], A[l]] = [A[l], A[i]];//backtrack 
        }
    }
}

// let S = 'ABC';
// permute([...S])

function permute22(S) { // Refactored and better solution, Easy to understand and easy to Digest
    let A = [...S], output = [];

    (function permute(l = 0) {
        if (l === A.length - 1) output.push(A.toString());
        else {
            for (let k = l; k <= A.length - 1; k++) {
                [A[l], A[k]] = [A[k], A[l]];
                permute(l + 1);
                [A[k], A[l]] = [A[l], A[k]];
            }
        }
    })();

    return output;
}

console.log(permute22('ABC'));

function permute33(S) {  //Checking if I can code again
    let A = [...S], output = [];

    function permute(l = 0) {
        if (l === A.length - 1) output.push(A.toString());
        else {
            for (let k = l; k < A.length; k++) {
                //SWAP l and K
                permute(l + 1);
                //Swap l and K
            }


        }
    }

}