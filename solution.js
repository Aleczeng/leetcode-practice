/**
 *    # 1 Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf((target - nums[i]), i + 1) > 0) {
            console.log([i, nums.indexOf((target - nums[i]), i + 1)]);
            return [i, nums.indexOf(target - nums[i])];
        } else {
            console.log("not available");
        }
    }
};

// twoSum([3, 3], 6);

const reverse = inputValue => {
    let isPositive = inputValue > 0;
    let result = parseInt(inputValue.toString().split("").reverse().join(''));
    if (!isPositive) {
        result = -result;
    }
    console.log(result);
};

reverse(12304);
