var maxArea = function (height) {
    let max = 0, l = 0, r = (height.length - 1);
    while (l < r) {
        max = Math.max(max, ((r - l) * Math.min(height[l], height[r])));
        height[l] < height[r] ? l++ : r++;
    }
    return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));