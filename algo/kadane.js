// Ref - https://www.youtube.com/watch?v=VMtyGnNcdPw
const kandane = (nums) => {

    let c_sum = nums[0];
    let c_best = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (c_sum > 0) {
            c_sum = c_sum + nums[i]
            
        }else{
            c_sum = nums[i]
        }

        if (c_sum > c_best) {
            c_best = c_sum
        }
    }
    return c_best
}

console.log(kandane([4, 3, -2, 6, 7, -10, -10, 4, 5, 9, -3, 4, 7, -28, 2, 9, 3, 2, 11]));
