function solution22(A, B) { //Code looks cleaner in while loop
    let downStream = [], upStream = [];

    for (let i = 0; i < A.length; i++) {
        let isDownStream = B[i], currentFish = A[i];

        if (isDownStream) {
            downStream.push(currentFish);
        } else { //upstream case
            while (downStream.length && downStream[downStream.length - 1] < currentFish) {
                downStream.pop();
            }
            if (!downStream.length) upStream.push(currentFish);
        }
    }
    return downStream.length + upStream.length
}

function solution(A, B) {   //Verified solution
    let downStream = [], upStream = [];

    for (let i = 0; i < A.length; i++) {
        let isDownStream = B[i], currentFish = A[i];

        if (isDownStream) {
            downStream.push(currentFish);
        } else { //upstream case
            while (downStream.length > 0) {
                if (downStream[downStream.length - 1] > currentFish) break;
                else downStream.pop();
            }
            if (downStream.length === 0) upStream.push(currentFish);
        }
    }
    return downStream.length + upStream.length
}