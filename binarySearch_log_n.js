/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let min = 0;
    let max = nums.length - 1;
    // let mid = 0
    while (min <=max) {
        // mid = mid + (max - min) / 2 // 1 2

        let mid = Math.floor((min, max) / 2)
        if (target > nums[mid]) {
            min = mid + 1 // 2
        } else if (target < nums[mid]) {
            max = mid - 1
        } else if (target === nums[mid]) {
            return mid
        } else {
            return min + 1
        }
    }
};
