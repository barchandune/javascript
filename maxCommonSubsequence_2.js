function maxCommonSubsequence(nums, len) {
    let max = 0
    let temp = 0;

    for(let i =0; i<len; i++){
        max += nums[i]
    }

    for (let i = len; i < nums.length; i++) {
        temp = max - nums[i-1] + nums[i]
        max = Math.max(temp, max);
    }
    return max
}

console.log(maxCommonSubsequence([1, 2, 4, 5, 9, 1, 4, 5], 2))
