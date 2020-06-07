// # 1
const twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        if (nums.indexOf(temp) > -1 && nums.indexOf(temp) !== i) {
            return [i, nums.indexOf(temp)]
        }
    }
};

// console.log(twoSum([3, 2, 4], 6))

// # 7
const reverse = function (x) {
    const result = x > 0 ? parseInt(x.toString().split("").reverse().join("")) :
        parseInt("-" + (x * (-1)).toString().split("").reverse().join(""));
    if (result > 2147483648 || result < -2147483648) {
        return 0;
    } else {
        return result;
    }
};
// console.log(reverse(1534236469))

// # 9

const isPalindrome = function (x) {
    return x >= 0 ? x === parseInt(x.toString().split("").reverse().join("")) : false;
};
console.log(isPalindrome(0))

// # 13
const romanToInt = function (s) {
    const romaMap = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let result = 0;
    let i = s.length;
    while (i--) {
        let current = romaMap[s.charAt(i)];
        let prev = romaMap[s.charAt(i - 1)];
        result += current;
        if (prev < current) {
            result -= prev;
            i--;
        }
    }
    return result;
};
