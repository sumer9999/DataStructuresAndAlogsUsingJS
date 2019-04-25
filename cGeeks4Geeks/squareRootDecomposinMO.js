function squareRoot(A = [], query) {  //MOs Algorithm to find SUM of ele between two index
    let len = A.length, blockNo = 1, blocks = {};
    let bsize = Math.ceil(Math.sqrt(len));

    for (let i = 0, count = 0; i <= len - 1; i += bsize, count = 0, blockNo++) {
        while (count < bsize && i + count <= len - 1) {
            blocks[blockNo] = (blocks[blockNo] || 0) + A[i + count];
            count++;
        }
    }
    console.log(blocks);
    let sum = 0;
    let start = query[0], end = query[1];
    startBlock = parseInt(start / bsize) + 1;
    endBlock = parseInt(end / bsize) + 1;

    for (let i = start; i < (bsize * startBlock) && i < len; i++) {
        sum += A[i];
    }
    console.log(sum);
    for (let i = (bsize * (endBlock - 1)); i <= end && i < len; i++) {
        sum += A[i];
    }
    console.log(sum);
    for (let i = startBlock + 1; i <= endBlock - 1; i++) {
        sum += blocks[i];
    }
    console.log(sum)
}


let arr = [1, 1, 2, 1, 30, 4, 5, 2, 8, 10];
let query = [0, 8];

console.log(squareRoot(arr, query));