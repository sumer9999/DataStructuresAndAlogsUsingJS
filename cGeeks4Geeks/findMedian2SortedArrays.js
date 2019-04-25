var findMedianSortedArrays = function (nums1, nums2) {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let count = 0, mid = Math.ceil((len1 + len2) / 2);
    let i1 = 0, i2 = 0, result = 0;

    while (count < mid) {
        if (nums1[i1] < nums2[i2]) {
            result = nums1[i1];
            i1++;
        } else {
            result = nums2[i2];
            i2++;
        }
        count++;
    }
    console.log(nums1[i1], nums2[i2], result);
    return parseInt(result);

};

const findMedianSortedArrays2 = (nums1, nums2) => {
    let newArr = [];

    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            newArr.push(nums1.shift());
        } else newArr.push(nums2.shift());
    }
    newArr = [...newArr, ...nums1, ...nums2]

    let center = Math.floor(newArr.length / 2);

    if (newArr.length % 2 === 0) {
        return (newArr[center] + newArr[center - 1]) / 2;
    }
    return newArr[center];
};


const findMedianSortedArrays4 = (nums1, nums2) => {
    let newArr = [...nums1, ...nums2].sort((a, b) => a - b);
    let center = Math.floor(newArr.length / 2);

    return (newArr.length % 2 === 0) ? (newArr[center] + newArr[center - 1]) / 2 : newArr[center];
};


var findMedianSortedArrays = function (nums1, nums2) {
    var size = (nums1.length + nums2.length);

    if (size == 0) return null;
    if (size == 1) return nums1.length > 0 ? nums1[0] : nums2[0];

    var median = (size + 1) / 2
    var medianMin = Math.floor(median);
    var medianMax = Math.ceil(median);
    var result = new Int32Array(medianMax);

    let i = 0, j = 0;



    while (i + j <= medianMax) {
        if (nums1[i] < nums2[j] || nums2[j] === undefined) {
            result[i + j] = nums1[i++];
        } else {
            result[i + j] = nums2[j++];
        }
    }

    //return result;
    return (result[--medianMin] + result[--medianMax]) / 2;


};

console.log(findMedianSortedArrays3([1, 3], [2]));